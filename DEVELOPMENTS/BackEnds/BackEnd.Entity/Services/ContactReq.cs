using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Entity.Services
{
    public class ContactReq
    {
        public virtual string Contact_Email { get; set; }
        public virtual string Contact_Phone { get; set; }
        public virtual string Contact_Linkdin { get; set; }
        public virtual string Contact_GitHub { get; set; }
        public virtual string Contact_Web { get; set; }
    }
}
