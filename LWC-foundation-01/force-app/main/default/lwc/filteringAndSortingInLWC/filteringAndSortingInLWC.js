import { LightningElement, wire } from 'lwc';
import getContactList from '@salesforce/apex/ContactsController.getContactList';


export default class FilteringAndSortingInLWC extends LightningElement {


    heading = ['ID','Name','Phone','Email'];
    tableData;
    tableFilteredData;
    timer;
    filterValue='Name';
    sortedValue='Name';
    sortDirection ='asc'
    @wire(getContactList)
    contactList({data,error})
    {   
        if(data)
         {
             console.log(data);
             this.tableData=data;
            // this.tableFilteredData=data;
             this.tableFilteredData=[... this.sortBy(this.tableData)]
         }
         else if(error)
         {
        
            console.log(error.body.message);
         }

    }


    filterData(event)
    {
                const{value} = event.target;
                window.clearTimeout(this.timer); 

            if(value)
            {
                    //debouncing technique giving some delay to call function 
                    //used to reset the timer 
                      //if suppose first u typed a and after imediately u typed b so this time clearTimeout method call to rest the 
                      //timer   
                    
                    this.timer = window.setTimeout(() => // used to set time delay to method call 
                    {
                        console.log(value)
                        this.tableFilteredData = this.tableData.filter((eachObj) => 
                            {
                                if(this.filterValue==='All')
                                {
                                //used to filter using all properties id,name,email....
                                /*
                                Object.keys(eachObj)   means['ID','Name','Phone','Email']; 
                                we are filtering each object which has all keys and if any of the key is someincludes then returns true
                                below is the logic we used to filter  and some includes means if any of the key contains the value then returns true
                                */
                                //return Object.keys(eachObj).some((key) => eachObj[key].toLowerCase().includes(value));
                                    return Object.keys(eachObj).some((key) => eachObj[key].toLowerCase().includes(value));
                                    Object.keys(eachobj).some(id)
                                }
                                

                                //used to filter by selected property from combo box
                                const val = eachObj[this.filterValue] ? eachObj[this.filterValue]:'';
                                return val.toLowerCase().includes(value.toLowerCase());
                    
                            })
                    },800)
                   
            }
            else
            {  
                this.tableFilteredData = [... this.tableData];
            }
            


    }

      get filterOptions(){
        return [
            { label: 'All', value: 'All' },
            { label: 'ID', value: 'Id' },
            { label: 'Name', value: 'Name' },
            { label: 'Email', value: 'Email' },
            { label: 'Phone', value: 'Phone' },
            
        ];
      } 

      get sortedOptions(){
        return [
            { label: 'ID', value: 'Id' },
            { label: 'Name', value: 'Name' },
            { label: 'Email', value: 'Email' },
            { label: 'Phone', value: 'Phone' },
            
        ];
      } 

    filterHandler(event)
    {
        this.filterValue = event.target.value;
        console.log(this.filterValue);
    }


    sortHandler(event)
    {
        this.sortedValue = event.target.value;
        console.log(this.sortedValue);
        this.tableFilteredData = [... this.sortBy(this.tableFilteredData)]
    }

    sortBy(data)
    {
        const cloneData = [... data];
        cloneData.sort((x,y) => {
            if(x[this.sortedValue] === y[this.sortedValue])
            {
                return 0;
            }
            {
                return this.sortDirection === 'desc' ? 
                x[this.sortedValue] > y[this.sortedValue] ? -1 : 1 :
                x[this.sortedValue] < y[this.sortedValue] ? -1 : 1;
            }})
            return cloneData;
            
    }



}