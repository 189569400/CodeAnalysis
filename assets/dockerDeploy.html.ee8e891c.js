import{_ as o,r as t,o as n,c as d,a as e,b as r,w as c,f as s,d as a}from"./app.b54cc28b.js";const l={},u=s(`<h1 id="docker-rapid-deployment-recommended-for-a-out-of-the-box-try" tabindex="-1"><a class="header-anchor" href="#docker-rapid-deployment-recommended-for-a-out-of-the-box-try" aria-hidden="true">#</a> Docker rapid deployment\uFF08Recommended for a out of the box try\uFF09</h1><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Docker deployment include Mariadb and Redis. Configuration file can be modified to indicate a MySQL/Mariadb and Redis, which satisfied operation and maintenance specification for extensive use.</p></div><h4 id="requirements" tabindex="-1"><a class="header-anchor" href="#requirements" aria-hidden="true">#</a> Requirements</h4><ul><li>System <ul><li>Linux, macOS or Windows</li><li>Minimum requirement\uFF1A2-core processor, 4GB RAM, 100 GB available disk space</li></ul></li><li>Environment <ul><li>Docker</li></ul></li><li>Privilege <ul><li>Open port 80, 8000&#39;s access(80 for TCA&#39;s requests, 8000 for TCA Server)</li></ul></li></ul><h4 id="to-be-deployed" tabindex="-1"><a class="header-anchor" href="#to-be-deployed" aria-hidden="true">#</a> To be deployed</h4><p>Server, Web and Client</p><h4 id="operating-instructions" tabindex="-1"><a class="header-anchor" href="#operating-instructions" aria-hidden="true">#</a> Operating instructions</h4><h5 id="first-start" tabindex="-1"><a class="header-anchor" href="#first-start" aria-hidden="true">#</a> First start</h5><ol><li>Enter the CodeAnalysis&#39;s work directory (e.g <code>~/CodeAnalysis</code>), the following paths are relative paths within the directory.</li><li>Execute command:<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>bash ./quick_install.sh docker deploy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><div class="custom-container tip"><p class="custom-container-title">TIP</p><ol><li>During docker deployment, the <code>tencenttca/tca:latest</code> image will be pulled from dockerhub by default.</li><li>During docker deployment, three paths will be mounted under the current root directory by default: <ul><li><code>.docker_temp/logs</code>\uFF1A<code>/var/log/tca/</code> in container\uFF0CTCA daily log output;</li><li><code>.docker_temp/data</code>\uFF1A<code>/var/opt/tca/</code> in container\uFF0C TCA service data, mainly about Mariadb,Redis;</li><li><code>.docker_temp/configs</code>\uFF1A<code>/etc/tca</code> in container\uFF0CTCA configuration file\uFF0Cmainly <code>config.sh</code></li></ul></li></ol></div><h5 id="update" tabindex="-1"><a class="header-anchor" href="#update" aria-hidden="true">#</a> Update</h5><ol><li>Update the code.</li><li>Execute command below:</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>TCA_IMAGE_BUILD=true ./quick_install.sh docker deploy  # Re-build and start TCA Container
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p><code>TCA_IMAGE_BUILD=true</code> Indicates that the TCA image is built locally to run</p></div><h5 id="run-a-docker-container" tabindex="-1"><a class="header-anchor" href="#run-a-docker-container" aria-hidden="true">#</a> Run a Docker container</h5><p>If <code>docker deploy</code> has been executed on the machine and the container data is retained, you can execute the following command to start the container and continue to run TCA</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>bash ./quick_install.sh docker start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="stop-a-docker-container" tabindex="-1"><a class="header-anchor" href="#stop-a-docker-container" aria-hidden="true">#</a> Stop a Docker container</h5><p>If a container is running and you want to stop it, you can run command</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>bash ./quick_install.sh docker stop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="use-your-tca" tabindex="-1"><a class="header-anchor" href="#use-your-tca" aria-hidden="true">#</a> Use your TCA</h4>`,21),h=a("Now, you have done the deployment of your first TCA. Please type "),p=e("code",null,"http://<Deploy server IP>",-1),m=a(' in your browser. click "\u7ACB\u5373\u4F53\u9A8C", after login you can start your Tencent Code Analysis trip.'),b=e("br",null,null,-1),f=a(" More operation instructions please check\uFF1A"),y=a("Quick start a code analysis"),v=e("div",{class:"custom-container tip"},[e("p",{class:"custom-container-title"},"TIP"),e("p",null,"Default account/Password\uFF1ACodeDog/admin"),e("p",null,"If the default account password has been modified during deployment, please login according to the modified account and password.")],-1);function g(_,k){const i=t("RouterLink");return n(),d("div",null,[u,e("p",null,[h,p,m,b,f,r(i,{to:"/en/guide/%E5%BF%AB%E9%80%9F%E5%85%A5%E9%97%A8/%E5%BF%AB%E9%80%9F%E5%90%AF%E5%8A%A8%E4%B8%80%E6%AC%A1%E4%BB%A3%E7%A0%81%E5%88%86%E6%9E%90.html"},{default:c(()=>[y]),_:1})]),v])}const x=o(l,[["render",g],["__file","dockerDeploy.html.vue"]]);export{x as default};
