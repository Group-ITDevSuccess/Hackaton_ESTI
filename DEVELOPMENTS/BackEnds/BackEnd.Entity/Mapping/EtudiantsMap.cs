using FluentNHibernate.Mapping;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Entity.Mapping
{
    class EtudiantsMap : SubclassMap<Etudiants>
    {
        public EtudiantsMap()
        {
            Abstract();
            Map(x => x.Etudiant_FirstName).Not.Nullable();
            Map(x => x.Etudiant_LastName).Not.Nullable();
            Map(x => x.Etudiant_Genre).Not.Nullable();
            Map(x => x.Etudiant_Birth).Not.Nullable();
            Map(x => x.Etudiant_Photo).Not.Nullable();
            
            HasManyToMany<Adress>(x => x.Etudiant_Adress)
                .Table("Localisation_Etudiant")
                .Cascade.All()
                .Not.LazyLoad();
            /*
            HasMany<Levels>(x => x.Etudiant_Level)
                 .Inverse()
                 .Cascade.All()
                 .Not.LazyLoad();
            
            HasManyToMany<City>(x => x.User_City)
                .Table("Users_City")
                .Cascade.All()
                .Not.LazyLoad();
            
            HasMany(x => x.User_Contacts)
                //.KeyColumn("User_Id")
                .Cascade.AllDeleteOrphan()
                //.Inverse()
                .Not.LazyLoad()
                ;
            */
        }
    }
}
