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
using System.Diagnostics;

namespace _2020_narsha_3in1printer
{
    public partial class Form1 : Form
    {
        const string cam_url = "http://192.168.0.3";
        ulong _ = 1596250564078;
        int speed = 63;

        int last_button_x = 0;
        int last_button_y = 0;
        int button_x = 0;
        int button_y = 0;

        void update_button_state()
        {
            if (last_button_x == button_x && last_button_y == button_y) return;
            last_button_x = button_x;
            last_button_y = button_y;

            if (button_x == -1 && button_y == -0) send_button_event_data1(1, 3, speed);
            if (button_x == -0 && button_y == -1) send_button_event_data2(1, 1, speed);
            if (button_x == -0 && button_y == +1) send_button_event_data2(1, 2, speed);
            if (button_x == +1 && button_y == -0) send_button_event_data1(1, 4, speed);
            if (button_x == -1 && button_y == -1) send_button_event(1, 7, speed, speed);
            if (button_x == +1 && button_y == -1) send_button_event(1, 5, speed, speed);
            if (button_x == +1 && button_y == +1) send_button_event(1, 6, speed, speed);
            if (button_x == -1 && button_y == +1) send_button_event(1, 8, speed, speed);
        }
        void send_button_event(int type, int cmd)
        {
            HttpWebRequest gomRequest = (HttpWebRequest)WebRequest.Create($"{cam_url}/?jcpcmd=pelcod20ctrl%20-type%20{type}%20-cmd%20{cmd}&_={_++}");
            gomRequest.Method = "GET";
            gomRequest.Timeout = 400;
            try
            {
                var res = gomRequest.GetResponse();
                res.Close();
            }
            catch (System.Net.WebException we) { }
        }
        void send_button_event_data1(int type, int cmd, int data1)
        {
            HttpWebRequest gomRequest = (HttpWebRequest)WebRequest.Create($"{cam_url}/?jcpcmd=pelcod20ctrl%20-type%20{type}%20-cmd%20{cmd}%20-data1%20{data1}&_={_++}");
            gomRequest.Method = "GET";
            gomRequest.Timeout = 400;
            try
            {
                var res = gomRequest.GetResponse();
                res.Close();
            }
            catch (System.Net.WebException we) { }
        }
        void send_button_event(int type, int cmd, int data1, int data2)
        {
            HttpWebRequest gomRequest = (HttpWebRequest)WebRequest.Create($"{cam_url}/?jcpcmd=pelcod20ctrl%20-type%20{type}%20-cmd%20{cmd}%20-data1%20{data1}%20-data2%20{data2}&_={_++}");
            gomRequest.Method = "GET";
            gomRequest.Timeout = 400;
            try
            {
                var res = gomRequest.GetResponse();
                res.Close();
            }
            catch (System.Net.WebException we) { }
        }
        void send_button_event_data2(int type, int cmd, int data2)
        {
            HttpWebRequest gomRequest = (HttpWebRequest)WebRequest.Create($"{cam_url}/?jcpcmd=pelcod20ctrl%20-type%20{type}%20-cmd%20{cmd}%20-data2%20{data2}&_={_++}");
            gomRequest.Method = "GET";
            gomRequest.Timeout = 400;

            try
            {
                var res = gomRequest.GetResponse();
                res.Close();
            }
            catch (System.Net.WebException we) { }
        }
        void clear_state()
        {
            send_button_event(1, 9);
        }

        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_KeyDown(object sender, KeyEventArgs e)
        {

            if (e.KeyCode == Keys.A) { button_x = -1; update_button_state(); }
            if (e.KeyCode == Keys.W) { button_y = -1; update_button_state(); }
            if (e.KeyCode == Keys.S) { button_y = +1; update_button_state(); }
            if (e.KeyCode == Keys.D) { button_x = +1; update_button_state(); }

        }

        private void Form1_KeyUp(object sender, KeyEventArgs e)
        {
            if (e.KeyCode == Keys.A) { button_x = 0; update_button_state(); }
            if (e.KeyCode == Keys.W) { button_y = 0; update_button_state(); }
            if (e.KeyCode == Keys.S) { button_y = 0; update_button_state(); }
            if (e.KeyCode == Keys.D) { button_x = 0; update_button_state(); }
        }
    }
}
