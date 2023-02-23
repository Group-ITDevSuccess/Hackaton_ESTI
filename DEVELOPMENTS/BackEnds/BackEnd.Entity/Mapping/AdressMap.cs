using FluentNHibernate.Mapping;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Entity.Mapping
{
    public class AdressMap : SubclassMap<Adress>
    {
        public AdressMap()
        {
            Abstract();
            Map(x => x.Adress_City).Not.Nullable();
            Map(x => x.Adress_Country).Not.Nullable();
            Map(x => x.Adress_Quartier).Not.Nullable();
            Map(x => x.Code_Postal).Not.Nullable();
            
            HasManyToMany<Etudiants>(x => x.Adress_Etudiant)
                .Table("Localisation_Etudiant")
                .Cascade.All()
                .Inverse()     
                .Not.LazyLoad();
        
        }
    }
}
