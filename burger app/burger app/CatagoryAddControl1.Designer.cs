namespace burger_app
{
    partial class CatagoryAddControl1
    {
        /// <summary> 
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary> 
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Component Designer generated code

        /// <summary> 
        /// Required method for Designer support - do not modify 
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            panel1 = new Panel();
            dataGridView1 = new DataGridView();
            AddBtn = new Button();
            textBN = new TextBox();
            label1 = new Label();
            panel1.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)dataGridView1).BeginInit();
            SuspendLayout();
            // 
            // panel1
            // 
            panel1.BackColor = SystemColors.AppWorkspace;
            panel1.Controls.Add(dataGridView1);
            panel1.Controls.Add(AddBtn);
            panel1.Controls.Add(textBN);
            panel1.Controls.Add(label1);
            panel1.Location = new Point(71, 33);
            panel1.Name = "panel1";
            panel1.Size = new Size(663, 335);
            panel1.TabIndex = 0;
            // 
            // dataGridView1
            // 
            dataGridView1.BackgroundColor = Color.FromArgb(255, 255, 128);
            dataGridView1.ColumnHeadersHeightSizeMode = DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            dataGridView1.Location = new Point(57, 208);
            dataGridView1.Name = "dataGridView1";
            dataGridView1.RowHeadersWidth = 51;
            dataGridView1.Size = new Size(544, 116);
            dataGridView1.TabIndex = 3;
            // 
            // AddBtn
            // 
            AddBtn.BackColor = Color.Yellow;
            AddBtn.FlatAppearance.BorderSize = 0;
            AddBtn.FlatStyle = FlatStyle.Flat;
            AddBtn.Font = new Font("Century Gothic", 12F, FontStyle.Regular, GraphicsUnit.Point, 204);
            AddBtn.ForeColor = Color.Blue;
            AddBtn.Location = new Point(249, 136);
            AddBtn.Name = "AddBtn";
            AddBtn.Size = new Size(171, 46);
            AddBtn.TabIndex = 2;
            AddBtn.Text = "Add\r\n";
            AddBtn.UseVisualStyleBackColor = false;
            AddBtn.Click += button1_Click;
            // 
            // textBN
            // 
            textBN.Location = new Point(383, 50);
            textBN.Name = "textBN";
            textBN.Size = new Size(207, 27);
            textBN.TabIndex = 1;
            textBN.TextChanged += textBN_TextChanged;
            // 
            // label1
            // 
            label1.AutoSize = true;
            label1.Font = new Font("Century Gothic", 13.8F, FontStyle.Bold, GraphicsUnit.Point, 204);
            label1.ForeColor = Color.FromArgb(255, 255, 128);
            label1.Location = new Point(57, 50);
            label1.Name = "label1";
            label1.Size = new Size(292, 27);
            label1.TabIndex = 0;
            label1.Text = "Enter the catagory Name\r\n";
            // 
            // CatagoryAddControl1
            // 
            AutoScaleDimensions = new SizeF(8F, 20F);
            AutoScaleMode = AutoScaleMode.Font;
            Controls.Add(panel1);
            Name = "CatagoryAddControl1";
            Size = new Size(817, 423);
            panel1.ResumeLayout(false);
            panel1.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)dataGridView1).EndInit();
            ResumeLayout(false);
        }

        #endregion

        private Panel panel1;
        private Label label1;
        private Button AddBtn;
        private TextBox textBN;
        private DataGridView dataGridView1;
    }
}
