namespace BurgerAppNeww
{
    partial class Form1
    {
        /// <summary>
        ///  Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        ///  Clean up any resources being used.
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

        #region Windows Form Designer generated code

        /// <summary>
        ///  Required method for Designer support - do not modify
        ///  the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(Form1));
            panel1 = new Panel();
            panel2 = new Panel();
            panel3 = new Panel();
            pictureBox1 = new PictureBox();
            label1 = new Label();
            label2 = new Label();
            home = new Button();
            eatin = new Button();
            Collection = new Button();
            takeaway = new Button();
            deliver = new Button();
            payment = new Button();
            help = new Button();
            button6 = new Button();
            twit = new Button();
            insta = new Button();
            notifc = new Button();
            setting = new Button();
            exit = new Button();
            panel1.SuspendLayout();
            panel3.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)pictureBox1).BeginInit();
            SuspendLayout();
            // 
            // panel1
            // 
            panel1.BackColor = Color.FromArgb(41, 39, 40);
            panel1.Controls.Add(help);
            panel1.Controls.Add(payment);
            panel1.Controls.Add(deliver);
            panel1.Controls.Add(takeaway);
            panel1.Controls.Add(Collection);
            panel1.Controls.Add(eatin);
            panel1.Controls.Add(home);
            panel1.Dock = DockStyle.Left;
            panel1.Location = new Point(0, 0);
            panel1.Name = "panel1";
            panel1.Size = new Size(177, 540);
            panel1.TabIndex = 0;
            // 
            // panel2
            // 
            panel2.BackColor = Color.FromArgb(178, 8, 55);
            panel2.Dock = DockStyle.Top;
            panel2.Location = new Point(177, 0);
            panel2.Name = "panel2";
            panel2.Size = new Size(779, 25);
            panel2.TabIndex = 1;
            // 
            // panel3
            // 
            panel3.BackColor = Color.FromArgb(178, 8, 55);
            panel3.Controls.Add(label2);
            panel3.Controls.Add(pictureBox1);
            panel3.Controls.Add(label1);
            panel3.Location = new Point(201, 3);
            panel3.Name = "panel3";
            panel3.Size = new Size(109, 137);
            panel3.TabIndex = 2;
            // 
            // pictureBox1
            // 
            pictureBox1.Image = (Image)resources.GetObject("pictureBox1.Image");
            pictureBox1.Location = new Point(17, 3);
            pictureBox1.Name = "pictureBox1";
            pictureBox1.Size = new Size(76, 74);
            pictureBox1.SizeMode = PictureBoxSizeMode.Zoom;
            pictureBox1.TabIndex = 3;
            pictureBox1.TabStop = false;
            // 
            // label1
            // 
            label1.AutoSize = true;
            label1.Font = new Font("Century Gothic", 10.8F, FontStyle.Bold, GraphicsUnit.Point, 204);
            label1.ForeColor = Color.White;
            label1.Location = new Point(11, 80);
            label1.Name = "label1";
            label1.Size = new Size(94, 22);
            label1.TabIndex = 3;
            label1.Text = "Fast Food";
            // 
            // label2
            // 
            label2.AutoSize = true;
            label2.Font = new Font("Century Gothic", 9F, FontStyle.Regular, GraphicsUnit.Point, 204);
            label2.ForeColor = Color.White;
            label2.Location = new Point(17, 102);
            label2.Name = "label2";
            label2.Size = new Size(87, 20);
            label2.TabIndex = 3;
            label2.Text = "Restuorant";
            // 
            // home
            // 
            home.FlatAppearance.BorderSize = 0;
            home.FlatStyle = FlatStyle.Flat;
            home.Font = new Font("Century Gothic", 10.8F, FontStyle.Regular, GraphicsUnit.Point, 204);
            home.ForeColor = Color.White;
            home.Image = (Image)resources.GetObject("home.Image");
            home.ImageAlign = ContentAlignment.MiddleLeft;
            home.Location = new Point(0, 53);
            home.Name = "home";
            home.Size = new Size(177, 40);
            home.TabIndex = 3;
            home.Text = "Home";
            home.UseVisualStyleBackColor = true;
            // 
            // eatin
            // 
            eatin.FlatAppearance.BorderSize = 0;
            eatin.FlatStyle = FlatStyle.Flat;
            eatin.Font = new Font("Century Gothic", 10.8F, FontStyle.Regular, GraphicsUnit.Point, 204);
            eatin.ForeColor = Color.White;
            eatin.Image = (Image)resources.GetObject("eatin.Image");
            eatin.ImageAlign = ContentAlignment.MiddleLeft;
            eatin.Location = new Point(0, 94);
            eatin.Name = "eatin";
            eatin.Size = new Size(177, 40);
            eatin.TabIndex = 4;
            eatin.Text = "Eat-In";
            eatin.UseVisualStyleBackColor = true;
            // 
            // Collection
            // 
            Collection.FlatAppearance.BorderSize = 0;
            Collection.FlatStyle = FlatStyle.Flat;
            Collection.Font = new Font("Century Gothic", 10.8F, FontStyle.Regular, GraphicsUnit.Point, 204);
            Collection.ForeColor = Color.White;
            Collection.Image = (Image)resources.GetObject("Collection.Image");
            Collection.ImageAlign = ContentAlignment.MiddleLeft;
            Collection.Location = new Point(0, 140);
            Collection.Name = "Collection";
            Collection.Size = new Size(177, 40);
            Collection.TabIndex = 5;
            Collection.Text = "Collection";
            Collection.UseVisualStyleBackColor = true;
            // 
            // takeaway
            // 
            takeaway.FlatAppearance.BorderSize = 0;
            takeaway.FlatStyle = FlatStyle.Flat;
            takeaway.Font = new Font("Century Gothic", 10.8F, FontStyle.Regular, GraphicsUnit.Point, 204);
            takeaway.ForeColor = Color.White;
            takeaway.Image = (Image)resources.GetObject("takeaway.Image");
            takeaway.ImageAlign = ContentAlignment.MiddleLeft;
            takeaway.Location = new Point(0, 186);
            takeaway.Name = "takeaway";
            takeaway.Size = new Size(177, 40);
            takeaway.TabIndex = 6;
            takeaway.Text = "Take Away";
            takeaway.UseVisualStyleBackColor = true;
            // 
            // deliver
            // 
            deliver.FlatAppearance.BorderSize = 0;
            deliver.FlatStyle = FlatStyle.Flat;
            deliver.Font = new Font("Century Gothic", 10.8F, FontStyle.Regular, GraphicsUnit.Point, 204);
            deliver.ForeColor = Color.White;
            deliver.Image = (Image)resources.GetObject("deliver.Image");
            deliver.ImageAlign = ContentAlignment.MiddleLeft;
            deliver.Location = new Point(0, 232);
            deliver.Name = "deliver";
            deliver.Size = new Size(177, 40);
            deliver.TabIndex = 7;
            deliver.Text = "Delivery";
            deliver.UseVisualStyleBackColor = true;
            // 
            // payment
            // 
            payment.FlatAppearance.BorderSize = 0;
            payment.FlatStyle = FlatStyle.Flat;
            payment.Font = new Font("Century Gothic", 10.8F, FontStyle.Regular, GraphicsUnit.Point, 204);
            payment.ForeColor = Color.White;
            payment.Image = (Image)resources.GetObject("payment.Image");
            payment.ImageAlign = ContentAlignment.MiddleLeft;
            payment.Location = new Point(0, 278);
            payment.Name = "payment";
            payment.Size = new Size(177, 40);
            payment.TabIndex = 8;
            payment.Text = "Payment";
            payment.UseVisualStyleBackColor = true;
            // 
            // help
            // 
            help.FlatAppearance.BorderSize = 0;
            help.FlatStyle = FlatStyle.Flat;
            help.Image = (Image)resources.GetObject("help.Image");
            help.Location = new Point(12, 483);
            help.Name = "help";
            help.Size = new Size(35, 35);
            help.TabIndex = 3;
            help.UseVisualStyleBackColor = true;
            // 
            // button6
            // 
            button6.FlatAppearance.BorderSize = 0;
            button6.FlatStyle = FlatStyle.Flat;
            button6.Image = (Image)resources.GetObject("button6.Image");
            button6.Location = new Point(596, 31);
            button6.Name = "button6";
            button6.Size = new Size(35, 35);
            button6.TabIndex = 9;
            button6.UseVisualStyleBackColor = true;
            // 
            // twit
            // 
            twit.FlatAppearance.BorderSize = 0;
            twit.FlatStyle = FlatStyle.Flat;
            twit.Image = (Image)resources.GetObject("twit.Image");
            twit.Location = new Point(637, 31);
            twit.Name = "twit";
            twit.Size = new Size(35, 35);
            twit.TabIndex = 10;
            twit.UseVisualStyleBackColor = true;
            // 
            // insta
            // 
            insta.FlatAppearance.BorderSize = 0;
            insta.FlatStyle = FlatStyle.Flat;
            insta.Image = (Image)resources.GetObject("insta.Image");
            insta.Location = new Point(678, 31);
            insta.Name = "insta";
            insta.Size = new Size(35, 35);
            insta.TabIndex = 11;
            insta.UseVisualStyleBackColor = true;
            // 
            // notifc
            // 
            notifc.FlatAppearance.BorderSize = 0;
            notifc.FlatStyle = FlatStyle.Flat;
            notifc.Image = (Image)resources.GetObject("notifc.Image");
            notifc.Location = new Point(827, 31);
            notifc.Name = "notifc";
            notifc.Size = new Size(35, 35);
            notifc.TabIndex = 9;
            notifc.UseVisualStyleBackColor = true;
            // 
            // setting
            // 
            setting.FlatAppearance.BorderSize = 0;
            setting.FlatStyle = FlatStyle.Flat;
            setting.Image = (Image)resources.GetObject("setting.Image");
            setting.Location = new Point(868, 31);
            setting.Name = "setting";
            setting.Size = new Size(35, 35);
            setting.TabIndex = 12;
            setting.UseVisualStyleBackColor = true;
            // 
            // exit
            // 
            exit.FlatAppearance.BorderSize = 0;
            exit.FlatStyle = FlatStyle.Flat;
            exit.Image = (Image)resources.GetObject("exit.Image");
            exit.Location = new Point(909, 31);
            exit.Name = "exit";
            exit.Size = new Size(35, 35);
            exit.TabIndex = 13;
            exit.UseVisualStyleBackColor = true;
            // 
            // Form1
            // 
            AutoScaleDimensions = new SizeF(8F, 20F);
            AutoScaleMode = AutoScaleMode.Font;
            ClientSize = new Size(956, 540);
            Controls.Add(exit);
            Controls.Add(setting);
            Controls.Add(notifc);
            Controls.Add(insta);
            Controls.Add(twit);
            Controls.Add(button6);
            Controls.Add(panel3);
            Controls.Add(panel2);
            Controls.Add(panel1);
            FormBorderStyle = FormBorderStyle.None;
            Name = "Form1";
            StartPosition = FormStartPosition.CenterScreen;
            Text = "Burger App";
            panel1.ResumeLayout(false);
            panel3.ResumeLayout(false);
            panel3.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)pictureBox1).EndInit();
            ResumeLayout(false);
        }

        #endregion

        private Panel panel1;
        private Panel panel2;
        private Panel panel3;
        private Button eatin;
        private Button home;
        private Label label2;
        private PictureBox pictureBox1;
        private Label label1;
        private Button help;
        private Button payment;
        private Button deliver;
        private Button takeaway;
        private Button Collection;
        private Button button6;
        private Button twit;
        private Button insta;
        private Button notifc;
        private Button setting;
        private Button exit;
    }
}
