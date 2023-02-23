using Backend.Business;
using Backend.Entity;
using Backend.Entity.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;

namespace Backend.Controllers
{
    public class EtudiantsController : ApiController
    {
        public EntityRepository<Etudiants> _etudiantRepository = null;

        public EtudiantsController(EntityRepository<Etudiants> etudiantRepository)
        {
            _etudiantRepository = etudiantRepository;
        }


        [HttpGet]
        [Route("api/etudiants")]
        public async Task<HttpResponseMessage> FindAllEtudiant()
        {
            /*
            EntityRepository<User> value = new EntityRepository<User>();
            var listOfAllUser = value.FindAll();
            */
            List<Etudiants> listOfAllEtudiant = await _etudiantRepository.FindAll();

            return Request.CreateResponse(HttpStatusCode.OK, listOfAllEtudiant);
        }

        [HttpGet]
        [Route("api/etudiant")]
        public async Task<HttpResponseMessage> FindEtudiantById([FromUri] Guid Id)
        {
            var etudiant = await _etudiantRepository.FindById(Id);
            if (etudiant == null)
            {
                return Request.CreateResponse(HttpStatusCode.NotFound, "L'id de l'Etudiant saisi n'existe pas !");
            }
            else
            {
                return Request.CreateResponse(HttpStatusCode.OK, etudiant);
            }
        }

        [HttpPost]
        [Route("api/etudiants/add")]
        public HttpResponseMessage AddEtudiant([FromBody] EtudiantsReq etudiantInput)
        {
            
            var etudiant = MapUser(etudiantInput);

            _etudiantRepository.SaveOrUpdate(etudiant);
            return Request.CreateResponse(HttpStatusCode.Created, "Etudiant Enregistrer !");  
        }

        private Etudiants MapUser(EtudiantsReq etudiantInput)
        {
            return new Etudiants
            {
                Etudiant_FirstName = etudiantInput.Etudiant_FirstName,
                Etudiant_LastName = etudiantInput.Etudiant_LastName,
                Etudiant_Birth = etudiantInput.Etudiant_Birth,
                Etudiant_Genre = etudiantInput.Etudiant_Genre,
                Etudiant_Photo = etudiantInput.Etudiant_Photo,

                Etudiant_Adress = etudiantInput.Etudiant_Adress.Select(c => new Adress
                { 
                    Adress_City = c.Adress_City,
                    Adress_Country = c.Adress_Country,
                    Adress_Quartier = c.Adress_Quartier,
                    Code_Postal = c.Code_Postal
                }).ToList()





                /*
                User_City = userInput.User_City.Select(c => new City
                {
                    City_Name = c.City_Name,
                }).ToList(),
                
                User_Contacts = userInput.User_Contact.Select(c => new Contacts
                {
                    Email = c.Email,
                    Number = c.Number
                }).ToList()
                */
            };
        }

        [HttpPatch]
        [Route("api/etudiant/update")]
        public async Task<HttpResponseMessage> UpdateEtudiant([FromUri] Guid Id,[FromBody] EtudiantsReq etudiantInput)
        {
            var idEtudiant = await _etudiantRepository.FindById(Id);
            if (idEtudiant == null)
            {
                return Request.CreateResponse(HttpStatusCode.NotFound, "Utilisateur N'exista Pas !");
            }

            idEtudiant.Etudiant_FirstName = etudiantInput.Etudiant_FirstName;
            idEtudiant.Etudiant_LastName = etudiantInput.Etudiant_LastName;
            idEtudiant.Etudiant_Birth = etudiantInput.Etudiant_Birth;
            idEtudiant.Etudiant_Genre = etudiantInput.Etudiant_Genre;
            idEtudiant.Etudiant_Photo = etudiantInput.Etudiant_Photo;

            idEtudiant.Etudiant_Adress.Clear();
            foreach (var item in etudiantInput.Etudiant_Adress)
            {
                idEtudiant.Etudiant_Adress.Add(new Adress
                {
                     Adress_City = item.Adress_City,
                     Adress_Country = item.Adress_Country,
                     Adress_Quartier = item.Adress_Quartier,
                     Code_Postal = item.Code_Postal
                });
            }

            _etudiantRepository.SaveOrUpdate(idEtudiant);

            return Request.CreateResponse(HttpStatusCode.OK, "Etudiants Mise à Jour !");
        }

        [HttpDelete]
        [Route("api/etudiant/delete")]
        public async Task<HttpResponseMessage> DeletUser([FromUri] Guid Id)
        {
            var idUser = await _etudiantRepository.FindById(Id);
            if (idUser == null)
            {
                return Request.CreateResponse(HttpStatusCode.NotFound, "Etudiant N'exista Pas !");
            }
            await _etudiantRepository.DeleteById(Id);
            return Request.CreateResponse(HttpStatusCode.OK, "Etudiant Supprimer avec Succes !");
        }
    }
}
