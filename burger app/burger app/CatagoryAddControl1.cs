using Microsoft.Data.SqlClient;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Configuration;
using System.Data;
using System.Diagnostics;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace burger_app
{
    public partial class CatagoryAddControl1 : UserControl
    {
        private readonly string connectionString;

        public CatagoryAddControl1()
        {
            InitializeComponent();
            connectionString = ConfigurationManager.ConnectionStrings["BurgerBaza"].ConnectionString;

        }

        private void button1_Click(object sender, EventArgs e)
        {
            string name = textBN.Text;

            SqlConnection conn = new SqlConnection(connectionString);
            try
            {
                conn.Open();
                string commandText = $"insert into Catagory(name) values('{name}')";

                SqlCommand sqlcomandr = new SqlCommand(commandText, conn);

                sqlcomandr.ExecuteNonQuery();

                MessageBox.Show("Added");
            }
            catch (Exception s)
            {
                MessageBox.Show(s.Message);
            }
            finally
            {
                conn.Close();
            }

        }

        private void textBN_TextChanged(object sender, EventArgs e)
        {

        }
    }
}
    


