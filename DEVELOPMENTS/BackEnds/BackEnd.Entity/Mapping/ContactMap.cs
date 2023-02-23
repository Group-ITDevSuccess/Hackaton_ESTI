using FluentNHibernate.Mapping;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Entity.Mapping
{
    public class ContactMap : SubclassMap<Contacts>
    {
        public ContactMap()
        {
            Abstract();
            Map(x => x.Contact_Email).Not.Nullable();
            Map(x => x.Contact_Phone).Not.Nullable();
            Map(x => x.Contact_Linkdin).Nullable();
            Map(x => x.Contact_GitHub).Nullable();
            Map(x => x.Contact_Web).Nullable();
            /*
            References(x => x.User)
               .Not.LazyLoad();
            */
        }
    }
}
