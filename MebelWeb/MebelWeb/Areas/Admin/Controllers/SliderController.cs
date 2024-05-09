using MebelWeb.Controllers;
using MebelWeb.DAL;
using MebelWeb.Extencion;
using MebelWeb.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace MebelWeb.Areas.Admin.Controllers
{
    [Area("Admin")]
    public class SliderController : Controller
    {
        private readonly AppDbContext appDbContext;
        private readonly IWebHostEnvironment _env;


        public SliderController(AppDbContext _appDbContext, IWebHostEnvironment env)
        {
            appDbContext = _appDbContext;
            _env = env;
        }
        public IActionResult Index()
        {
            return View(appDbContext.Sliders.ToList());
        }
        [HttpGet]
        public IActionResult Create()
        {
            return View();
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create(Slider slider)
        {
            if (!ModelState.IsValid)

            {
                return View(slider);
            }
            if (!slider.ImgFile.IsImage())
            {
                ModelState.AddModelError("Photo", "Image type is not valid");
            }
            slider.ImgUrl = await slider.ImgFile.SaveFileAsync(_env.WebRootPath, "Images");
            appDbContext.Sliders.Add(slider);
            appDbContext.SaveChanges();

            return RedirectToAction("Index");
        }

        public IActionResult Delete(int id)
        {
            if (id == 0)
            {
                return NotFound();
            }

            var slider = appDbContext.Sliders.Find(id);
            if (slider != null)
            {
                slider.IsCheck = true;
                appDbContext.SaveChanges();
            }

            return Json(new
            {
                status = 200
            });

        }
        [HttpGet]
        public JsonResult Edit(int id)
        {
            if (id == 0)
            {
                return Json(new
                {
                    status = 400
                });
            }
            var model = appDbContext.Sliders.FirstOrDefault(x => x.Id == id);
            if (model == null)
            {
                return Json(new
                {
                    status = 400
                });
            }
            return Json(model);
        }

        [HttpPost]
        public async Task<IActionResult> EditAsync(Slider slider)
        {

            if (!ModelState.IsValid)
            {
                return View(slider);

            }

            string filename = await slider.ImgFile.SaveFileAsync(_env.WebRootPath, "Images");
            slider.ImgUrl = filename;
            appDbContext.Sliders.Update(slider);
            appDbContext.SaveChanges();

            return RedirectToAction("Index");

        }
    }
}
