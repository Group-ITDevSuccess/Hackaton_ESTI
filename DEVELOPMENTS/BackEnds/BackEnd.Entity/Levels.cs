using Backend.Enum;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Entity
{
    public class Levels : Entity
    {
        public virtual LevelsEnum Level_Status { get; set; }
        public virtual decimal Level_Montant { get; set; }
        /*
        [JsonIgnore]
        public virtual IList<Etudiants> Level_Etudiants { get; set; }
        */
        
    }
}
