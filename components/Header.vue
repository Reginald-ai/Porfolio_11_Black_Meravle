<template>
  <header>
    <div class="navbar">
      <div class="container">
        <a href="#" class="navbar-brand"> Black Meravle </a>
        <!-- <button class="navbar-btn">
          <span></span>
        </button> -->
        <ul class="navbar-nav">
          <li class="nav-item"><a href="#" class="nav-link">Home</a></li>
          <li class="nav-item"><a href="#" class="nav-link">Features</a></li>
          <li class="nav-item"><a href="#" class="nav-link">About</a></li>
          <button class="btn btn-secondary me-3">Login</button>
        </ul>
      </div>
    </div>
    <div class="navbar-nav-2">
      <div class="container">
        <ul class="navbar-nav navbar-dropdown">
          <li class="nav-item">
            <a href="#" class="nav-link">Home</a> <span class="span-bg"></span
            ><i class="fas fa-home custom-fa"></i>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">Features</a
            ><span class="span-bg heart"></span>
            <i class="fa fa-check-square custom-fa" aria-hidden="true"></i>
          </li>
          <li class="nav-item">
            <a href="./about.html" class="nav-link">About</a>
            <span class="span-bg cyan"></span>
            <i class="fa fa-user custom-fa" aria-hidden="true"></i>
          </li>
          <button class="btn btn-secondary">Log in</button>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" >
header {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;

  .navbar {
    .navbar-brand {
      display: flex;
      align-items: center;
      flex-direction: row-reverse;
      font-weight: 900;
      color: #fff;
      font-size: 25px;

      // h4 {
      // }
    }

    .navbar-btn {
      display: block;
      outline: none;
      border: none;
      background: none;
      color: #fff;
      font-size: 28px;

      @include breakpoint-up(medium) {
        display: none;
      }

      span {
        width: 30px;
        height: 3px;
        background-color: #fff;
        display: block;
      }

      span::after {
        content: "";
        transform: translateY(-11px);
        background: #fff;
        width: 30px;
        height: 3px;
        display: block;
        transition: all 0.15s ease;
      }

      span::before {
        width: 30px;
        height: 3px;
        background-color: #fff;
        display: block;
        content: "";
        transform: translateY(8px);
        transition: all 0.15s ease;
      }

      &.active span {
        background: transparent;
      }

      &.active span::before {
        transform: rotate(45deg) translate(3px, 2px);
      }

      &.active span::after {
        transform: rotate(-45deg);
      }
    }

    .navbar-nav {
      display: none;

      @include breakpoint-up(medium) {
        display: flex;
        flex-direction: row;
      }

      .nav-link {
        padding-right: 20px;
        color: #fff;
        font-family: "Poppins", sans-serif;

        // font-weight: 900;
      }

      // .nav-item {
      // }

      .btn {
        border-radius: 20px;
        padding: 00px 25px;
        background-color: #07b8dc;
        border-color: #0dcaf0;
        outline: none;
        box-shadow: none;

        &:active {
          box-shadow: rgba(12, 117, 238, 0.4) 0px 0px 0px 2px,
            rgba(17, 103, 200, 0.65) 0px 4px 6px -1px,
            rgba(23, 109, 190, 0.08) 0px 1px 0px inset;
        }
      }
    }
  }

  .sticky {
    background-color: #111720;
    opacity: 0.8;
    .navbar-brand {
      color: #fff;
    }

    .navbar-nav {
      .nav-link {
        color: #fff;
      }
    }

    .navbar-btn {
      span {
        background-color: #fff;
      }

      span::after {
        background-color: #fff;
      }

      span::before {
        background-color: #fff;
      }
    }
  }

  .navbar-nav-2 {
    .navbar-dropdown {
      opacity: 0;
      justify-content: center;
      align-items: center;
      transition: all 0.6s ease;
      margin-top: -500px;
      border: 1px solid #b9b9b9;
      padding: 20px;
      border-radius: 0px 0px 20px 20px;
      box-shadow: 0 3px 20px 0 rgba(0, 0, 0, 0.3);
      background-color: #fff;

      .nav-link {
        color: #5c5656;
        margin-bottom: 10px;
      }

      .nav-item {
        width: 100%;
        text-align: center;
        padding: 10px;
        box-shadow: 0 3px 20px 0 rgba(0, 0, 0, 0.3);
        border-radius: 30px 30px 30px 0;
        margin-bottom: 10px;
        position: relative;

        &:hover .nav-link {
          z-index: 999;
          position: relative;
          color: white;
        }

        &:hover .span-bg {
          width: 100%;
        }

        &:hover .span-bg::after {
          display: none;
          opacity: 0.1;
        }

        .span-bg {
          background-color: #ffa000;
          width: 120px;
          height: 70px;
          float: right;
          position: absolute;
          border-radius: 30px 30px 30px 0;
          right: 0px;
          top: 0px;
          -webkit-transition: all 0.3s;
          transition: all 0.3s;
        }

        .span-bg::after {
          content: "";
          width: 0;
          height: 0;
          border-top: 71px solid #fff;
          border-right: 55px solid transparent;
          position: absolute;
          top: 0px;
          left: -2px;
        }

        .custom-fa {
          position: absolute;
          right: 30px;
          font-size: xx-large;
          top: 20px;
          color: #fff;
        }
      }

      .btn {
        width: 100%;
        border-radius: 10px;
        padding: 20px;
      }
    }

    .navbar-dropdown.opens {
      opacity: 1;
      margin: 0;

      @include breakpoint-up(medium) {
        opacity: 0;
        margin-top: -500px;
      }
    }
  }
}
</style>
