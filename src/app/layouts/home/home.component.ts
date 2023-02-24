import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { DataViewService } from 'src/app/data-view.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  getcountryValues : any;




  //sharing value to another page
  

  //Storing as a Form-Group
  myForm !: FormGroup;

  // Creating a new group for password checking
  passChecking !: FormGroup;
  /***Setting a variable for checking password match */
  missmatch = false;



  //Using Form Builder
  constructor(private fB: FormBuilder, public dataService : DataViewService) { }

  // Variables for Storing Values
  public firstName : string = '';
  public lastName: any;
  public age: any;
  public mobileNumber: any;
  public address: any;
  public education: any;
  public email: any;
  public password: any;
  public message: any;

  // OnInit Life-Cycle
  ngOnInit() {

    this.myForm = this.fB.group({
      fname: ['',[Validators.required,Validators.pattern('[a-zA-Z]*'),Validators.minLength(4)]],
      lname: ['',[Validators.required,Validators.pattern('[a-zA-Z]*'),Validators.minLength(4)]],
      age: ['',[Validators.required]],
      mobileNumber: ['',[Validators.required, Validators.pattern("[0-9 ]{10}")]],
      address: ['',[Validators.required,Validators.maxLength(50)]],
      education: ['',[Validators.required]],
      email: ['',[Validators.required,Validators.email,Validators.pattern('^[A-Za-z0-9._%+-]+@[A-Za-z0-9._%+-]{2,}[.][A-Za-z]{2,}$'),Validators.minLength(10)]],

      password: ['', [Validators.required,Validators.maxLength(15),Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$")]],
      password2: ['', [Validators.required,Validators.maxLength(15),Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$")]],

      comment: ['',[Validators.required,Validators.maxLength(15)]]

    },{validator : this.passwordValues}
    );


  }


  //**The Function i am calling in Group
  passwordValues(passValues: FormGroup) {
    return passValues.controls['password'].value === passValues.controls['password2'].value ? null : { 'missmatch': true };

  }


  // On Submission ### Do This ####

  onSubmit(form: FormGroup) {

    this.firstName = form.value.fname;
    this.lastName = form.value.lname;
    this.age = form.value.age;
    this.mobileNumber = form.value.mobileNumber;
    this.address = form.value.address;
    this.education = form.value.education;
    this.email = form.value.email;
    this.password = form.value.password;
    this.message = form.value.comment;

    console.log(form);


  }

  
  getCountries(){
    return this.dataService.getCountries().subscribe((response : any)=>{

      this.getcountryValues = response;
      
      
      

    })
  }

  

  addData(form : FormGroup){
     const onh = {
      fname : form.value.fname ,
      lname : form.value.lname,
      age : form.value.age ,
      number : form.value.mobileNumber  ,
      address : form.value.address ,
      education : form.value.education ,
      email : form.value.email ,
      password : form.value.password,
      message : form.value.comment 
      //country : form.value.country
    }

      
      this.dataService.addData(onh);


      
    


    
      

   
    this.firstName = form.value.fname;
    this.lastName = form.value.lname;
    this.age = form.value.age;
    this.mobileNumber = form.value.mobileNumber;
    this.address = form.value.address;
    this.education = form.value.education;
    this.email = form.value.email;
    this.password = form.value.password;
    this.message = form.value.comment;


  

  }

}
