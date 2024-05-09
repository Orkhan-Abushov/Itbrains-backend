Create Database Texnology
Use Texnology

Create table Brands
(
TexId int primary key identity (1,1),
TexName nvarchar(100),
);

insert into Brands
Values
('Hp'),
('Apple'),
('Xiaomi'),
('Asus');


Create table Notebook
(
NotebookId int primary key identity(1,1),
NotebookName nvarchar(50),
NotebookPrice float
);

insert into Notebook(NotebookName,NotebookPrice,BrandId)
Values
('ASUS', 999.99,1),
('HP', 1299.99,2),  
('APPLE', 799.99,3),  
('Samsung', 1199.99,4),  
('Huawei', 1399.99,5);  


Select *From Notebook
drop table Notebook

Alter table Notebook
add BrandId int foreign key References Brands(TexId)



create table Phone
(
PhoneId int primary key identity (1,1),
PhoneName nvarchar (30) not null,
PhonePrice float,
BrandId int foreign key references Brands(TexId)
);
insert into Phone
Values
('Huawei P-Smart',879.99,5),
('S24',1489.99,4),
('Xiaomi Not 13',499.99);