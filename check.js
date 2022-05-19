
// Q:1

// var now = new Date()

// document.write(now);


// Q:2

// var monthNames = ["January", "February", "March", "April", "May", "June",
//   "July", "August", "September", "October", "November", "December"
// ];

// var a = new Date();
// document.write(monthNames[a.getMonth()])




// Q:3

// var days=["Sunday","Monday","Tuesday","wednesday","Thursday","Friday","Saturday"];
// var v=new Date();


// var day=v.getDay();
// day=days[day].slice(0,3);
// document.write(day);

// Q:4
// var arr=["Sunday","Monday","Tuesday","wednesday","Thursday","Friday","Saturday"];
// var check_day=new Date();
// var day=check_day.getDay();
// day=arr[day];
// if(day=="Sunday" || day=="Saturday")
// {
//   alert("its fun day!");
// }

// Q:5
// var a = new Date()
// if(a.getDate()<=15)
// {
//     document.write("First 15 days of the month");
// }
// else if(a.getDate()>=16)
// {
//     document.write("Its last days of month");
// }


// Q:6
// var todayDate = new Date();
// var Todaymilli = todayDate.getTime();
// var todayMin = todayDate.getMinutes();
// var diff = Todaymilli - todayMin;
// var diffMin = diff/(1000*60*60);
// var accurateMin = Math.floor(diffMin);
// document.write("Current Date: " + todayDate);
// document.write("<br> Elapsed milliseconds since midnight, Jan 1, 1970: " + Todaymilli);
// document.write("<br> Elapsed minutes since midnight, Jan 1, 1970: " + accurateMin)



// // Q:7
// var a = new Date(" Thu Dec 31 2020 ");
// document.write("Later Date ",a)

// Q:8
// var hours=new Date();
// hours=hours.getHours();


// if(hours>=0 && hours<12)
// {
//   alert("Its AM");
// }
// else
// {
//   alert("Its PM")
// }

// Q:9
//     var ramdan_date = new Date("04/24/2020"); 
// var today_date = new Date("06/27/2020"); 
  
// // To calculate the time difference of two dates 
// var Days_passed =  today_date.getTime()-ramdan_date.getTime();
  
// // To calculate the no. of days between two dates 
// var Days_passed = Days_passed / (1000 * 3600 * 24); 
  
// //To display the final no. of days (result) 
// document.write("Total number of days since ramdan passed :"+ Days_passed);


// Q:10
// var today_date=new Date();
// var refrence_date=new Date("1/1/2015");
// var elapsed_seconds=today_date.getTime()-refrence_date.getTime();

// document.write("Seconds passed since 1 jan 2015 :"+elapsed_seconds/1)


// Q:11 
// var date_And_time=new Date();




// var date=date_And_time.getDate();
// var month=date_And_time.getMonth();
// var Hours=date_And_time.getHours()-1;

// var year=date_And_time.getFullYear();
// var day=date_And_time.getDate();
// var day_w=date_And_time.getDay();
// var getm=date_And_time.getMinutes();
// var days=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
// var months=["Jan ","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
// var d=days[day_w];
// var m=months[month];


// document.write("Current Time :"+date_And_time+"<br>");

// document.write("Time an hour ago was :"+d+" "+m+" "+day+" "+year+" "+Hours+":"+date_And_time.getMinutes()+":"+date_And_time.getSeconds()+" "+"GMT+0500 (Pakistan Standard Time)");



// Q:12

// var users_age=prompt("Enter your age in years:");
// var d=new Date();
// var today_year=d.getFullYear();
// var users_born_year=today_year-users_age
// document.write("User's age is :"+users_age+"<br>");
// document.write("Year in which user born :"+users_born_year);

// Q:13
// var today_date=new Date();
// var year_back_100=new Date("6/5/1915");

// document.write("Current date is :"+today_date+"<br> 100 years ago it was :"+year_back_100);



// Q:14
// var name="Ahad";
// var dates=new Date();
// var month=dates.getMonth();
// var months_arr=["january","fabuary","march","april","may","june","july","august","september","october","november","december"];
// var current_month=months_arr[month];
// var no_of_units=410;
// var charges_per=16;
// var net_amount=no_of_units*charges_per;
// var late_payment_charges=350;
// var gross_amount=net_amount+late_payment_charges;

// document.write("Customer Name:"+name+"<br>");
// document.write("Month:"+current_month+"<br>");
// document.write("Number of units :"+no_of_units+"<br>");
// document.write("Charges per unit:"+charges_per+"<br>");
// document.write("Net Amount Payable (with in due date):"+net_amount+"<br>");
// document.write("Gross Amount Payable (after due date):"+gross_amount+"<br>");