import { LightningElement, track } from 'lwc';

export default class TipClac extends LightningElement {

    @track totalValueUpdate; 
    @track tipValueUpdate = 0;
    @track numberValueUpdate;
    @track pay;
    @track totalpay;
    @track visibility = false;

    billAmt(event){
        this.totalValueUpdate = event.target.value
    }
    tip(event){
        this.tipValueUpdate = event.target.value;
    }
    people(event){
        this.numberValueUpdate = event.target.value
    }
    tipinc(){
        this.tipValueUpdate < 100 ? this.tipValueUpdate = this.tipValueUpdate+1 : false 
    }
    tipdesc(){
        this.tipValueUpdate > 0 ? this.tipValueUpdate = this.tipValueUpdate-1 : false 
    }
    
    calculateBtn(event) {
        this.pay= this.totalValueUpdate * (this.tipValueUpdate/100)
        this.totalpay = (Number(this.totalValueUpdate)+Number(this.pay))/this.numberValueUpdate
        isFinite(this.totalpay) == true ? this.visibility = true : false
        console.log(this.pay)
        console.log(this.totalpay)
    }
    
    resetBtn(event){
       this.template.querySelector('form').reset(); 
       this.visibility = false
    }
}