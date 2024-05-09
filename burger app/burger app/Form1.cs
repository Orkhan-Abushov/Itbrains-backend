using Microsoft.Data.SqlClient;
using System.Configuration;
using System.Diagnostics;

namespace burger_app
{
    public partial class Form1 : Form
    {
        private object catagoryAddControl1;
        string connectionString;
        private object producteAddControl1;

        public Form1()
        {
            InitializeComponent();
            SlidePanel.Height = Button1.Height;
            SlidePanel.Top = Button1.Top;
            firstCustomControl1.BringToFront();
            connectionString = ConfigurationManager.ConnectionStrings["BurgerBaza"].ConnectionString;


        }

        private void Form1_Load(object sender, EventArgs e)
        {

        }
        private void button1_Click(object sender, EventArgs e)
        {
            SlidePanel.Height = Button1.Height;
            SlidePanel.Top = Button1.Top;
            firstCustomControl1.BringToFront();

        }

        private void button2_Click(object sender, EventArgs e)
        {
            SlidePanel.Height = Button2.Height;
            SlidePanel.Top = Button2.Top;
            mySecondCustControl1.BringToFront();

        }

        private void button3_Click(object sender, EventArgs e)
        {
            SlidePanel.Height = Button3.Height;
            SlidePanel.Top = Button3.Top;
        
        }


        private void button13_Click(object sender, EventArgs e)
        {
            Application.Exit();
        }

        private void panel3_Paint(object sender, PaintEventArgs e)
        {

        }

        private void button14_Click(object sender, EventArgs e)
        {
            SlidePanel.Height = button14.Height;
            SlidePanel.Top = button14.Top;
            catagoryAddControl11.BringToFront();

        }

        private void catagoryAddControl11_Load(object sender, EventArgs e)
        {

        }
    }
}
