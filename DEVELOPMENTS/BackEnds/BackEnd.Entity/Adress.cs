using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Entity
{
    public class Adress : Entity
    {
        public virtual string Adress_City { get; set; }
        public virtual string Adress_Country { get; set; }
        public virtual string Adress_Quartier { get; set; }
        public virtual int Code_Postal { get; set; }
        
        [JsonIgnore]
        public virtual IList<Etudiants> Adress_Etudiant { get; set; }
        
    }
}
