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
    public class AdressController : ApiController
    {
        public EntityRepository<Adress> _adressRepository = null;

        public AdressController(EntityRepository<Adress> adressRepository)
        {
            _adressRepository = adressRepository;
        }

        [HttpGet]
        [Route("api/adress")]
        public HttpResponseMessage GetAllAdress()
        {
            /*
            EntityRepository<Country> value = new EntityRepository<Country>();
            var allCountry = value.FindAll();
            */
            var allAdress = _adressRepository.FindAll();

            return Request.CreateResponse(HttpStatusCode.OK, allAdress);
        }
    }
}
