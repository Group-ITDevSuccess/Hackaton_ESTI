using FluentNHibernate.Mapping;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Entity.Services
{
    class RolesEtudiantsMap : SubclassMap<RolesEtudiants>
    {
        public RolesEtudiantsMap()
        {
            Abstract();
            Map(x => x.Roles_Status).Not.Nullable();
        }
    }
}
