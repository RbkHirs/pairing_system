# pairing_system

Description: 
This system helps by making pairing list. At first, the student's names are added by press on "add student" in the nav par. Then in each sprint the user can write the sprint name and the new pairing names will appear by click on "create". The user can change the list until reaching the best list then click "submit" to send the data to the database and save it. You can see all the previous lists by click Groups in the nav par.

As developer:   
We welcome you in this app and hope to enjoy working with us.  
-Main information:   This app is programmed by using:  
a. For back-end: Express.  
b. For front-end: react-js.  
c. For database: Mongoose.  
d. For design: material-ui.  
  
The homepage is the main part of the app. It has two components; paringList and addStudent. Each component has one file in “client” folder. Also you will find in the client folder, "index.jsx" file which role is display the components on the homepage, and "routes.js" has all the routes and connect them to the main page in "index.jsx" file. 
In this app the user can insert information to add new student in “add Student page” which include student name, level and cohort number. This information is saved in the database which is named as db file in the server folder. The other type of inserted information is the pairing names, which will added to the database for each student when the user click submit for the created pairing list.    
In the server part, definitely, it has get, post and put actions. Add student uses post request. On the other hand, create new pairing list uses get request, and also will use the put request to add the new pairing names to the database.

Installation: 
"npm install" will download all the packeges that you need to run it.

Usage: 
To start this app you need to open four terminal windows, two of them for mongood, one for the server and the last one for the webpack: 
a. mongod 
b. mongo (for windows)
c. npm start 
d. npm run dev 

Credits: 
you can contact to the developers by:
  abdulazeez: abdulazeeznaji@gmail.com        github name: abdulazeeznaji
  Mohannad: mohannadbakkar@gmail.com          github name: MohannadBakkar
  Sahar: hayelsahar@gmail.com                 github name: SaharAl-shurafat1990
  Esraa: israma7i@gmail.com                   github name: rbkEsraaRamahi


