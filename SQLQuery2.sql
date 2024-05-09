create database Employee
Use Employee
create table department(
Id int primary key identity(1,1),
Name nvarchar(50)not null )
 insert  into department
 Values
 ('Manager'),
 ('Team Meneger')
  
  Select *from department
  

 create table Employees
 (
 Id int primary key identity (1,1),
 Name Nvarchar (50),
 DepartmentId int not null, 
foreign key (DepartmentId) references Department(Id)
SalaryiesId int unique not null,
foreign key (SalariesId) references Salaries(Id)
 );

 insert into department
 Values
 ('Softwere developments');


 insert into Employees
 Values
 ('Ehmed', 3)
 Select *from Employees
 drop table Employees

 create table salaries(
 Id int primary key identity(1,1),
 amount Float not null,
 effective date )
   Insert into salaries
   Values
   (2000,'2019-05-13')

   Select*from salaries

    select sum (amount)as'cemi' from salaries
	select count (amount) as'sayi' from salaries
	select max(amount)as 'en boyuk' from salaries
	select min (amount) as 'en kicik' from salaries
	select AVG (Amount) as 'ortalama' from salaries

