using Backend.Business;
using Backend.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;

namespace Backend.Controllers
{
    public class RolesEtudiantsController : ApiController
    {
        public EntityRepository<RolesEtudiants> _rolesEtudiants = null;

        public RolesEtudiantsController(EntityRepository<RolesEtudiants> rolesEtudiants)
        {
            _rolesEtudiants = rolesEtudiants;
        }

        [HttpGet]
        [Route("api/roles_etudiants")]
        public async Task<HttpResponseMessage> GetAllRolesEtudiants()
        {
            var roles = await _rolesEtudiants.FindAll();
            return Request.CreateResponse(HttpStatusCode.OK, roles);
        }
     }
}
