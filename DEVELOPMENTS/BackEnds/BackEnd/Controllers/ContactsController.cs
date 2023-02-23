using Backend.Business;
using Backend.Entity;
using Backend.Entity.Services;
using NHibernate;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;

namespace Backend.Controllers
{
    public class ContactsController : ApiController
    {
        public EntityRepository<Contacts> _contactsRepository = null;
        public EntityRepository<Etudiants> _etudiantsRepository = null;

        public ContactsController(EntityRepository<Contacts> contactsRepository, EntityRepository<Etudiants> etudiantsRepository)
        {
            _contactsRepository = contactsRepository;
            _etudiantsRepository = etudiantsRepository;
        }   

        [HttpGet]
        [Route("api/contacts")]
        public HttpResponseMessage GetAllContacts()
        {
            var getAllContact = _contactsRepository.FindAll();
            return Request.CreateResponse(HttpStatusCode.OK, getAllContact);
        }
        
        /*
        [HttpPost]
        [Route("api/contacts/add")]
        public async Task<HttpResponseMessage> AddContacts([FromBody] Contacts contactInput, [FromUri] Guid Etudiant_Id)
        {
            var specifiqueEtudiant = await _etudiantsRepository.FindById(Etudiant_Id);

            if (specifiqueEtudiant == null)
            {
                //return Request.CreateResponse(HttpStatusCode.NotFound, RedirectToAction("Index", "Users"));
                return Request.CreateResponse(HttpStatusCode.NotFound, "Etudiant n'existe Pas !");
            }

            specifiqueEtudiant.User_Contacts.Add(contactInput);
            _usersRepository.SaveOrUpdate(specificUser);

            return Request.CreateResponse(HttpStatusCode.OK, "Utilisateur d'existe Pas !");
        }
         */
    }
}
