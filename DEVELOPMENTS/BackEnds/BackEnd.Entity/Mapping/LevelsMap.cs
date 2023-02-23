using FluentNHibernate.Mapping;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Entity.Mapping
{
    public class LevelsMap : SubclassMap<Levels>
    {
        public LevelsMap()
        {
            Abstract();
            Map(x => x.Level_Status).Not.Nullable();
            Map(x => x.Level_Montant).Not.Nullable();

            /*
            References(x => x.Level_Etudiants)
                .Not.Nullable()
                .Not.LazyLoad();

            HasManyToMany<Etudiants>(x => x.User)
                .Table("Users_City")
                .Cascade.All()
                .Inverse()
                .Not.LazyLoad();
            */
        }
    }
}
