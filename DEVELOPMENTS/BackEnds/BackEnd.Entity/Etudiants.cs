using Backend.Enum;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Entity
{
    public class Etudiants : Entity
    {
        public virtual string Etudiant_FirstName { get; set; }
        public virtual string Etudiant_LastName { get; set; }
        public virtual bool Etudiant_Genre { get; set; }
        public virtual DateTime Etudiant_Birth { get; set; }
        public virtual string Etudiant_Photo { get; set; }
        public virtual IList<Adress> Etudiant_Adress { get; set; }
        //public virtual LevelsEnum Etudiant_Level { get; set; }
        //public virtual IList<City> Etudiant_City { get; set; }
        //public virtual IList<Contacts> Etudiant_Contacts { get; set; }
        
    }
}
