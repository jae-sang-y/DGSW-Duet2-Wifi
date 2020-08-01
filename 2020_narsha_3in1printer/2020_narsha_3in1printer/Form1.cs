using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.Web;
using System.IO;
using System.Net;
using System.Threading;

namespace _2020_narsha_3in1printer
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void button1_MouseDown(object sender, MouseEventArgs e)
        {
            string TargetURL = "http://192.168.137.191/?jcpcmd=pelcod20ctrl%20-type%201%20-cmd%207%20-data1%2063%20-data2%2063";
            HttpWebRequest gomRequest = (HttpWebRequest)WebRequest.Create(TargetURL);
            gomRequest.Method = "GET";

            WebResponse response = gomRequest.GetResponse();
            Stream dataStream = response.GetResponseStream();
            StreamReader reader = new StreamReader(dataStream);

            string responseFromServer = reader.ReadToEnd();

            reader.Close();
            dataStream.Close();
            response.Close();
        }

        private void button1_MouseUp(object sender, MouseEventArgs e)
        {
            string TargetURL = "http://192.168.137.191/?jcpcmd=pelcod20ctrl%20-type%201%20-cmd%209";
            HttpWebRequest gomRequest = (HttpWebRequest)WebRequest.Create(TargetURL);
            gomRequest.Method = "GET";

            WebResponse response = gomRequest.GetResponse();
            Stream dataStream = response.GetResponseStream();
            StreamReader reader = new StreamReader(dataStream);

            string responseFromServer = reader.ReadToEnd();

            reader.Close();
            dataStream.Close();
            response.Close();
        }

        private void button2_MouseDown(object sender, MouseEventArgs e)
        {
            string TargetURL = "http://192.168.137.191/?jcpcmd=pelcod20ctrl%20-type%201%20-cmd%201%20-data2%2063";
            HttpWebRequest gomRequest = (HttpWebRequest)WebRequest.Create(TargetURL);
            gomRequest.Method = "GET";

            WebResponse response = gomRequest.GetResponse();
            Stream dataStream = response.GetResponseStream();
            StreamReader reader = new StreamReader(dataStream);

            string responseFromServer = reader.ReadToEnd();

            reader.Close();
            dataStream.Close();
            response.Close();
        }

        private void button2_MouseUp(object sender, MouseEventArgs e)
        {
            string TargetURL = "http://192.168.137.191/?jcpcmd=pelcod20ctrl%20-type%201%20-cmd%209";
            HttpWebRequest gomRequest = (HttpWebRequest)WebRequest.Create(TargetURL);
            gomRequest.Method = "GET";

            WebResponse response = gomRequest.GetResponse();
            Stream dataStream = response.GetResponseStream();
            StreamReader reader = new StreamReader(dataStream);

            string responseFromServer = reader.ReadToEnd();

            reader.Close();
            dataStream.Close();
            response.Close();
        }

        private void button3_MouseDown(object sender, MouseEventArgs e)
        {
            string TargetURL = "http://192.168.137.191/?jcpcmd=pelcod20ctrl%20-type%201%20-cmd%205%20-data1%2063%20-data2%2063";
            HttpWebRequest gomRequest = (HttpWebRequest)WebRequest.Create(TargetURL);
            gomRequest.Method = "GET";

            WebResponse response = gomRequest.GetResponse();
            Stream dataStream = response.GetResponseStream();
            StreamReader reader = new StreamReader(dataStream);

            string responseFromServer = reader.ReadToEnd();

            reader.Close();
            dataStream.Close();
            response.Close();
        }

        private void button3_MouseUp(object sender, MouseEventArgs e)
        {
            string TargetURL = "http://192.168.137.191/?jcpcmd=pelcod20ctrl%20-type%201%20-cmd%209";
            HttpWebRequest gomRequest = (HttpWebRequest)WebRequest.Create(TargetURL);
            gomRequest.Method = "GET";

            WebResponse response = gomRequest.GetResponse();
            Stream dataStream = response.GetResponseStream();
            StreamReader reader = new StreamReader(dataStream);

            string responseFromServer = reader.ReadToEnd();

            reader.Close();
            dataStream.Close();
            response.Close();
        }

        private void button4_MouseDown(object sender, MouseEventArgs e)
        {
            string TargetURL = "http://192.168.137.191/?jcpcmd=pelcod20ctrl%20-type%201%20-cmd%203%20-data1%2063";
            HttpWebRequest gomRequest = (HttpWebRequest)WebRequest.Create(TargetURL);
            gomRequest.Method = "GET";

            WebResponse response = gomRequest.GetResponse();
            Stream dataStream = response.GetResponseStream();
            StreamReader reader = new StreamReader(dataStream);

            string responseFromServer = reader.ReadToEnd();

            reader.Close();
            dataStream.Close();
            response.Close();
        }

        private void button4_MouseUp(object sender, MouseEventArgs e)
        {
            string TargetURL = "http://192.168.137.191/?jcpcmd=pelcod20ctrl%20-type%201%20-cmd%209";
            HttpWebRequest gomRequest = (HttpWebRequest)WebRequest.Create(TargetURL);
            gomRequest.Method = "GET";

            WebResponse response = gomRequest.GetResponse();
            Stream dataStream = response.GetResponseStream();
            StreamReader reader = new StreamReader(dataStream);

            string responseFromServer = reader.ReadToEnd();

            reader.Close();
            dataStream.Close();
            response.Close();
        }

        private void button6_MouseDown(object sender, MouseEventArgs e)
        {
            string TargetURL = "http://192.168.137.191/?jcpcmd=pelcod20ctrl%20-type%201%20-cmd%204%20-data1%2063";
            HttpWebRequest gomRequest = (HttpWebRequest)WebRequest.Create(TargetURL);
            gomRequest.Method = "GET";

            WebResponse response = gomRequest.GetResponse();
            Stream dataStream = response.GetResponseStream();
            StreamReader reader = new StreamReader(dataStream);

            string responseFromServer = reader.ReadToEnd();

            reader.Close();
            dataStream.Close();
            response.Close();
        }

        private void button6_MouseUp(object sender, MouseEventArgs e)
        {
            string TargetURL = "http://192.168.137.191/?jcpcmd=pelcod20ctrl%20-type%201%20-cmd%209";
            HttpWebRequest gomRequest = (HttpWebRequest)WebRequest.Create(TargetURL);
            gomRequest.Method = "GET";

            WebResponse response = gomRequest.GetResponse();
            Stream dataStream = response.GetResponseStream();
            StreamReader reader = new StreamReader(dataStream);

            string responseFromServer = reader.ReadToEnd();

            reader.Close();
            dataStream.Close();
            response.Close();
        }

        private void button7_MouseDown(object sender, MouseEventArgs e)
        {
            string TargetURL = "http://192.168.137.191/?jcpcmd=pelcod20ctrl%20-type%201%20-cmd%208%20-data1%2063%20-data2%2063";
            HttpWebRequest gomRequest = (HttpWebRequest)WebRequest.Create(TargetURL);
            gomRequest.Method = "GET";

            WebResponse response = gomRequest.GetResponse();
            Stream dataStream = response.GetResponseStream();
            StreamReader reader = new StreamReader(dataStream);

            string responseFromServer = reader.ReadToEnd();

            reader.Close();
            dataStream.Close();
            response.Close();
        }

        private void button7_MouseUp(object sender, MouseEventArgs e)
        {
            string TargetURL = "http://192.168.137.191/?jcpcmd=pelcod20ctrl%20-type%201%20-cmd%209";
            HttpWebRequest gomRequest = (HttpWebRequest)WebRequest.Create(TargetURL);
            gomRequest.Method = "GET";

            WebResponse response = gomRequest.GetResponse();
            Stream dataStream = response.GetResponseStream();
            StreamReader reader = new StreamReader(dataStream);

            string responseFromServer = reader.ReadToEnd();

            reader.Close();
            dataStream.Close();
            response.Close();
        }

        private void button8_MouseDown(object sender, MouseEventArgs e)
        {
            string TargetURL = "http://192.168.137.191/?jcpcmd=pelcod20ctrl%20-type%201%20-cmd%202%20-data2%2063";
            HttpWebRequest gomRequest = (HttpWebRequest)WebRequest.Create(TargetURL);
            gomRequest.Method = "GET";

            WebResponse response = gomRequest.GetResponse();
            Stream dataStream = response.GetResponseStream();
            StreamReader reader = new StreamReader(dataStream);

            string responseFromServer = reader.ReadToEnd();

            reader.Close();
            dataStream.Close();
            response.Close();
        }

        private void button8_MouseUp(object sender, MouseEventArgs e)
        {
            string TargetURL = "http://192.168.137.191/?jcpcmd=pelcod20ctrl%20-type%201%20-cmd%209";
            HttpWebRequest gomRequest = (HttpWebRequest)WebRequest.Create(TargetURL);
            gomRequest.Method = "GET";

            WebResponse response = gomRequest.GetResponse();
            Stream dataStream = response.GetResponseStream();
            StreamReader reader = new StreamReader(dataStream);

            string responseFromServer = reader.ReadToEnd();

            reader.Close();
            dataStream.Close();
            response.Close();
        }

        private void button9_MouseDown(object sender, MouseEventArgs e)
        {
            string TargetURL = "http://192.168.137.191/?jcpcmd=pelcod20ctrl%20-type%201%20-cmd%206%20-data1%2063%20-data2%2063";
            HttpWebRequest gomRequest = (HttpWebRequest)WebRequest.Create(TargetURL);
            gomRequest.Method = "GET";

            WebResponse response = gomRequest.GetResponse();
            Stream dataStream = response.GetResponseStream();
            StreamReader reader = new StreamReader(dataStream);

            string responseFromServer = reader.ReadToEnd();

            reader.Close();
            dataStream.Close();
            response.Close();
        }

        private void button9_MouseUp(object sender, MouseEventArgs e)
        {
            string TargetURL = "http://192.168.137.191/?jcpcmd=pelcod20ctrl%20-type%201%20-cmd%209";
            HttpWebRequest gomRequest = (HttpWebRequest)WebRequest.Create(TargetURL);
            gomRequest.Method = "GET";

            WebResponse response = gomRequest.GetResponse();
            Stream dataStream = response.GetResponseStream();
            StreamReader reader = new StreamReader(dataStream);

            string responseFromServer = reader.ReadToEnd();

            reader.Close();
            dataStream.Close();
            response.Close();
        }
    }
}
