using AngularApiTest.Controllers;
using Microsoft.AspNetCore.Mvc;

namespace WebAPILayer.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class StudentController : ControllerBase
    {
        private static readonly string Students =
        "{\"students\":[{\"name\":\"Alice\",\"age\":20,\"hobbies\":[\"reading\",\"swimming\",\"coding\"]},{\"name\":\"Bob\",\"age\":22,\"hobbies\":[\"painting\",\"dancing\",\"singing\"]}]}";

        [HttpGet("GetStudents")]
        public IActionResult GetStudents()
        {
            try
            {
                var StudentsObj = Newtonsoft.Json.JsonConvert.DeserializeObject<StudentDetails>(Students);
                
                return Ok(StudentsObj);
            }
            catch (Exception Ex)
            {
                return StatusCode(500, "Error: " + Ex.Message);
            }
        }
    }
}