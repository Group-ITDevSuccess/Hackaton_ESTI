using Backend.Business;
using Backend.Entity;
using Backend.Entity.Services;
using Backend.Utils;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Backend.Controllers
{
    public class LevelsController : ApiController
    {
        public EntityRepository<Levels> _levelsRepository = null;

        public LevelsController(EntityRepository<Levels> levelsRepository)
        {
            _levelsRepository = levelsRepository;
        }

        [HttpGet]
        [Route("api/levels")]
        public HttpResponseMessage GetAllLivels()
        {
            var listOfLevels = _levelsRepository.FindAll();
            return Request.CreateResponse(HttpStatusCode.OK, listOfLevels);
        }

        [HttpGet]
        [Route("api/levels/add")]
        public HttpResponseMessage AddRolesEtudiants()
        {
            FixtureHelper value = new FixtureHelper();
            value.AddLevel();
            return Request.CreateResponse(HttpStatusCode.OK, "Roles Etudiants Ajouter !");
        }

        /*
        [HttpPost]
        [Route("api/city/add")]
        public HttpResponseMessage AddCity([FromBody] CityReq cityInput)
        {
            var city = MapCity(cityInput);

            _cityRepository.SaveOrUpdate(city);
            return Request.CreateResponse(HttpStatusCode.OK, "City Enregistrer !");
        }

        private City MapCity(CityReq cityInput)
        {
            return new City
            {
                City_Name = cityInput.City_Name
            };
        }

        */
    }
}
