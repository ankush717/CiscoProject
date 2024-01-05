import { LightningElement ,track,wire } from 'lwc';
import getaccount from '@salesforce/apex/AccountDetails.getDetails';


export default class SerchResult extends LightningElement {
    @track data;
    @track error='';

    @wire(getaccount) wireList({data,error})
    {
               if(data)
                {
                    this.data=data;
                
                }
                else if(error)
                {

                    this.error=error;
                }
    }

}