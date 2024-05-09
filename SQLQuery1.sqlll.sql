CREATE DATABASE [User]
USE [User]

CREATE TABLE UserTable(
ID int primary key identity(1,1),
Fullname nvarchar(50) not null,
Gmail nvarchar(50) unique Check (Gmail like '%@gmail.com'),
Gender nvarchar(10) Check(Gender='male' or Gender='Female'),
Country nvarchar(30) default 'Azerbaijan'
);

INSERT INTO UserTable(Fullname,Gmail,Gender,Country)
VALUES('Aaa','abc@gmail.com','male','USA')

SELECT * FROM UserTable
INSERT INTO UserTable(Fullname,Gmail,Gender,Country)
VALUES
('Aaa','jhg@gmail.com','female','Barcelona'),
('vdbns','ghjk@gmail.com','female','Filland'),
('Arash','Arsh@gmail.com','male','Barcelona'),
('Erik','Erk@gmail.com','male','USA'),
('Adil','Adil@gmail.com','male','ITALY'),
('Adam','adm@gmail.com','male','ITALY'),
('Eva','Eva@gmail.com','male','France'),
('Elchin','Elch@gmail.com','male','Barcelona'),
('Nigar','gari@gmail.com','female','USA'),
('Nilufer','nilo@gmail.com','female','USA'),
('Azeri','azeri@gmail.com','female','Barcelona')

 Select * From UserTable Where Country like 'U%'

 Delete from UserTable where Id=5

  Alter table UserTable
  Add password varchar(255) not null Default'2345'

  Alter table UserTable
  Add status bit not null Default 0

  select * From UserTable where Country='Barcelona'  or  Country ='Italy';


   