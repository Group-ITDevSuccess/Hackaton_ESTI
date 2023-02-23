using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Entity.Services
{
    public class LevelsReq
    {
        public virtual string Level_Status { get; set; }
        public virtual decimal Level_Montant { get; set; }
        /*
        public virtual decimal Level_Montant { get { return GetLevelMontant(); }}

        private decimal GetLevelMontant()
        {
            switch (Level_Status)
            {
                case Level_Status.L1:
                    return 100;
                case Level_Status.L2:
                    return 200;
                case Level_Status.L3:
                    return 300;
                case LevelStatus.M1:
                    return 400;
                case LevelStatus.M2:
                    return 500;
                default:
                    throw new InvalidOperationException("Invalid LevelStatus");
            }
        */
        }
}
