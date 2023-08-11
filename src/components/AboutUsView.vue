<template>
  <div class="body-container">
    <div class="text-size-changer-container">
      <div class="text-size-changer" style="font-size: 18px">
        <a style="color:#848484" href="javascript:void(0);" class="decrease font_18">A-</a>
        <a style="color:#848484" href="javascript:void(0);" class="increase font_18">A+</a>
      </div>
    </div>
    <div class="page-container">
      <h1>About Us</h1>
      <p>Welcome to IGMS - the Integrated Grant Management System. The system is designated for researchers and grant managers who are involved in NRF, MOH, MOE and A*STAR grants.</p>
      <p/>

      <h3>National Research Foundation</h3>
      <p>The National Research Foundation (NRF), set up on 1 January 2006, is a department within the Prime Minister's Office. The NRF sets the national direction for research and development (R&D) by developing policies, plans and strategies for research, innovation and enterprise. It also funds strategic initiatives and builds up R&D capabilities by nurturing research talent. The NRF aims to transform Singapore into a vibrant R&D hub that contributes towards a knowledge-intensive, innovative and entrepreneurial economy; and make Singapore a magnet for excellence in science and innovation.</p>
      <p/>

      <h3>Ministry of Health</h3>
      <p>Championing a healthy nation with our people - To live well, live long & with peace of mind. Our mission is to promote good health and reduce illness, ensure access to good and affordable healthcare, and pursue medical excellence.</p>
      <p/>

      <h3>Ministry of Education</h3>
      <p>The Ministry Of Education directs the formulation and implementation of education policies. It has control of the development and administration of the Government and Government-aided primary schools, secondary schools, junior colleges, and a centralised institute. It also registers private schools.</p>
      <p/>

      <h3>The Agency for Science, Technology and Research (A*STAR)</h3>
      <p>The Agency for Science, Technology and Research (A*STAR) is Singapore's lead public sector R&D agency, spearheading economic-oriented research to advance scientific discovery and develop innovative technology. Through open innovation, we collaborate with our partners in both the public and private sectors to benefit society.</p>
      <p>As a Science and Technology Organisation, A*STAR bridges the gap between academia and industry. Our research creates economic growth and jobs for Singapore, and enhances lives by contributing to societal benefits such as improving outcomes in healthcare, urban living, and sustainability.</p>
      <p>
        We play a key role in nurturing and developing a diversity of talent and leaders in our Agency and research entities, the wider research community and industry. A*STAR’s R&D activities span biomedical sciences and physical sciences and engineering, with research entities primarily located in Biopolis and Fusionopolis. For ongoing news, visit
        <a>www.a-star.edu.sg.</a>
      </p>
      <p/>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutUsView"
}
</script>

<style scoped>
h3 {
  color: #505050;
  padding: 20px 0 0;
  margin: 0;
  font-weight: 500;
  font-size: 28px;
  line-height: 1.4;
  font-family: "Segoe UI Semilight","Segoe UI","Segoe",Tahoma,Helvetica,Arial,sans-serif;
}

a {
  color: #0072c6;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

p {
  margin-bottom: 10px;
  line-height: 1.6;
  font-size: 16px;
  margin-top: 0;
  padding: 0;
}

h1 {
  margin: 0;
  line-height: 1.4;
  color: #0072C6;
  font-size: 28px;
  font-weight: 500;
  font-family: "Segoe UI","microsoft yahei",'Alegreya Sans', "Arial", "Sans Serif",serif;
  padding-bottom: 10px;
}

.page-container {
  display: flex;
  margin: auto;
  font-size: 16px;
  padding-left: 3%;
  width: 1170px;
  flex-direction: column;
}

.text-size-changer a {
  margin-right: 15px;
}

.text-size-changer-container {
  margin: auto;
  width: 1170px;
  text-align: right;
  padding: 10px;
}

.body-container {
  position: relative;
  padding-right: 15px;
  padding-left: 15px;
}
</style>