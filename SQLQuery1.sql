create database ListDMA
Use ListDMA
create table StudentTable(
Id int,
name Nvarchar(25),
Surname Nvarchar (25),
)
Insert Into StudentTable(Id,name,Surname)
VAlues
(1,'Andrey','Petrov'),
(2,'Ivan','Cunqulashvili');

SELECT * FROM StudentTable;

delete From StudentTable Where Id=1;


 update StudentTable
 Set name='Leon',Surname='Pushkin'
 Where Id=2;


