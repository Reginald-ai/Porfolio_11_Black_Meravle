<template>
  <div class="index">
    <div class="index-1-2">
      <div class="index-first">
        <b-container>
          <b-row class="align-items-center">
            <b-col cols="12" sm="12" md="6" lg="6">
              <h1>Websitesss Designed to Help Your Business Succeed!</h1>
              <p>
                Grow your business and increase your sales with a strengthened
                online presence.
              </p>
              <b-button pill variant="info" class="px-4 py-2"
                >Get Started</b-button
              >
            </b-col>
            <b-col cols="12" sm="12" md="6" lg="6">
              <SvgLancer class="w-100" />
            </b-col>
          </b-row>
        </b-container>
      </div>
      <div class="index-card pt-5">
        <div class="container">
          <div class="row">
            <b-col col cols="12" md="6" lg="4">
              <div class="c-card">
                <SvgCode class="c-card-img mx-auto" />
                <div class="c-card-body">
                  <div class="c-card-text">
                    <h1>
                      We create & plan a customized content strategy for your
                      blog
                    </h1>
                    <p>
                      Get paid by your listeners, every month, predictably. No
                      CPMs, and no scheduling required.
                    </p>
                  </div>
                </div>
              </div>
            </b-col>
            <b-col col cols="12" md="6" lg="4">
              <div class="c-card">
                <SvgDiamond class="c-card-img mx-auto" />
                <div class="c-card-body">
                  <div class="c-card-text">
                    <h1>
                      We create & plan a customized content strategy for your
                      blog
                    </h1>
                    <p>
                      Get paid by your listeners, every month, predictably. No
                      CPMs, and no scheduling required.
                    </p>
                  </div>
                </div>
              </div>
            </b-col>
            <b-col col cols="12" md="6" lg="4">
              <div class="c-card">
                <SvgEye class="c-card-img" />
                <div class="c-card-body">
                  <div class="c-card-text">
                    <h1>
                      We create & plan a customized content strategy for your
                      blog
                    </h1>
                    <p>
                      Get paid by your listeners, every month, predictably. No
                      CPMs, and no scheduling required.
                    </p>
                  </div>
                </div>
              </div>
            </b-col>
          </div>
        </div>
      </div>
    </div>
    <div class="index-views">
      <b-container>
        <b-row class="align-center">
          <b-col cols="12" sm="12" md="6" lg="6">
            <SvgCard class="w-100" />
          </b-col>
          <b-col cols="12" sm="12" md="6" lg="6">
            <h1>The content marketing service focused on RESULTS</h1>
            <p>
              List a product once and it will be published across all of your
              connected sales channels. Similarly, when you make changes to your
              listing
            </p>
          </b-col>
          <b-col>
            <hr style="border: 1px solid #fff" />
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div class="index-service">
      <b-container>
        <b-row class="align-center">
          <b-col>
            <h1>
              What you get with our content marketing for startups service
            </h1>
            <p>
              List a product once and it will be published across all of your
              connected sales channels. Similarly, when you make changes to your
              listing
            </p>
          </b-col>
          <b-col>
            <SvgContent class="w-100 h-100" />
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div class="index-belows">
      <b-container>
        <b-row class="align-center">
          <b-col>
            <SvgFinance class="w-100 h-100" />
          </b-col>
          <b-col>
            <h1>Our Content Writing & Marketing Service costs $2,500/month.</h1>
            <p>
              List a product once and it will be published across all of your
              connected sales channels. Similarly, when you make changes to your
              listing
            </p>
          </b-col>
        </b-row>
      </b-container>
      <div class="index-faq">
        <b-container>
          <b-row> </b-row>
        </b-container>
      </div>
    </div>
    <div class="contact-me">
      <b-container>
        <b-row>
          <b-col>
            <h1>Interested in growing your online presence?</h1>
            <b-button variant="info" class="btn-talk">Let's Talk</b-button>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import SvgFinance from "@/assets/img/index/Finance professional (1).svg";
import SvgBelowsCards from "@/assets/img/index/cards-index-belows.svg";
import SvgContent from "@/assets/img/index/Content.svg";
import SvgCard from "@/assets/img/index/card-views.svg";
import SvgCode from "@/assets/img/index/1.svg";
import SvgDiamond from "@/assets/img/index/2.svg";
import SvgEye from "@/assets/img/index/3.svg";
import SvgLancer from "@/assets/img/index/freelancer-online-laptop-smartphone-svgrepo-com.svg";
export default {
  components: {
    SvgLancer,
    SvgCode,
    SvgDiamond,
    SvgEye,
    SvgCard,
    SvgContent,
    SvgBelowsCards,
    SvgFinance,
  },
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
  },
};
</script>

<style lang="scss" >
.col {
  padding: 15px;
}
body {
  background: #28282f;
}
.index {
}
.index-1-2 {
  background: url("@/assets/img/index/Fluid-10s-1920px.svg?inline");
  background-size: cover;
}
.index-card {
  margin: 80px 0px;
  .c-card {
    background: #2f313f;
    padding: 20px;
    // width: 358px;
    // height: 400px;
    border-radius: 5px;
    margin: 0 auto;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    .c-card-img {
      margin: 40px 0px;
    }
    .c-card-body {
      .c-card-text {
        // color: #352b53;
        h1 {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 15px;
        }
        p {
          font-size: 14px;
        }
      }
    }
  }
}
.index-views {
  padding: 150px 0px;
  background: #2c7aae;
  h1 {
    font-size: 36px;
    font-weight: bold;
  }
  p {
    font-size: 16px;
  }
}
.index-service {
  background: url("@/assets/img/index/service.svg?inline") no-repeat;
  background-size: cover;
  color: #fff;
  background-position: bottom;
  padding: 150px 0px;

  h1 {
    font-size: 36px;
    font-weight: bold;
  }
  p {
    font-size: 16px;
  }
}
.index-belows {
  background: url("@/assets/img/index/index-belows.svg?inline") no-repeat;
  padding: 150px 0px;

  background-size: cover;
}
.index-faq {
  padding: 150px 0px;
  // background: url("@/assets/img/index/FAQ.svg?inline") no-repeat;
}
.contact-me {
  background: url("@/assets/img/index/contact.svg?inline") no-repeat;
  background-size: cover;
  padding: 180px 0px;
  text-align: center;
  h1 {
    font-size: 38px;
    font-weight: bold;
  }
  .btn-talk {
    background: #41a3fd;
    padding: 15px 40px;
    margin-top: 30px;
  }
}
</style>
