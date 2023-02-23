using Backend.Entity;
using Backend.Enum;
using NHibernate;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Utils
{
    public class FixtureHelper
    {
        public void AddLevel()
        {
            using (ISession session = NHibernateHelper.GetSessionFactory().OpenSession())
            {
                using (ITransaction transaction = session.BeginTransaction())
                {
                    session.SaveOrUpdate(new Levels() { Level_Status = LevelsEnum.L1 });
                    session.SaveOrUpdate(new Levels() { Level_Status = LevelsEnum.L2 });
                    session.SaveOrUpdate(new Levels() { Level_Status = LevelsEnum.L3 });
                    session.SaveOrUpdate(new Levels() { Level_Status = LevelsEnum.M1 });
                    session.SaveOrUpdate(new Levels() { Level_Status = LevelsEnum.M2 });
                    transaction.Commit();
                }
            }
        }

    }
}
