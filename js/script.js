      //SideNav
        const sideNav = document.querySelector('.sidenav');
        M.Sidenav.init(sideNav, {});
      //Slider
        const slider = document.querySelector('.slider');
        M.Slider.init(slider, {
          indicators: false,
          height: 500,
          transistion: 500,
          interval: 5000
        });
      //Material Box
        const mb = document.querySelectorAll('.materialboxed');
        M.Materialbox.init(mb, {});
      //Scrollspy
      const ss = document.querySelectorAll('.scrollspy');
      M.ScrollSpy.init(ss, {});        