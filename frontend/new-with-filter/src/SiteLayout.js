import React from 'react';
class SiteLayout extends React.Component {

  render() {
    return <div>
          <div id="header-wrap">
            <div id="header-top-wrap">
              <div class="container">
                <table>
                  <tr>
                    <td class="phone-number"><span class="wsite-text wsite-phone">
                        Causes for Animals (Singapore ) Limited
                      </span></td>
                  </tr>
                </table>
              </div>
            </div>

            <div id="header-wrap-in">
              <div class="container">
                <table id="header">
                  <tr>
                    <td id="logo"><span class="wsite-logo">
                        <a href="index.html">
                          <img src={require('./image/5381480.png')} alt="Causes for Animals (Singapore) - Dog Adoption, Stray Management, Community Outreach in Singapore" />
                        </a>
                      </span>
                    </td>
                    <td id="header-right">
                      <table>
                        <tr>
                          <td class="search"><span class="wsite-search">
                              <form id="wsite-header-search-form" action="https://www.causesforanimals.com/apps/search"
                                method="get">
                                <input type="text" name="q" class="wsite-search-input" autocomplete="off"
                                  placeholder="Search" /><span class="wsite-search-button"><span
                                    class="wsite-search-button-inner"></span></span>
                              </form>
                            </span></td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>

          <div id="wrap-in" class="wsite-background">
            <div id="nav-wrap">
              <div class="container">
                <ul class="wsite-menu-default">
                    <li id="active" class="wsite-menu-item-wrap     wsite-nav-1" style={{position: "relative"}}>
                      <a href="/" class="wsite-menu-item" style={{position: "relative"}}>Home</a>
                    </li>

                    <li id="pg101147185312262965" class="wsite-menu-item-wrap     wsite-nav-2" style={{position: "relative"}}>
                      <a href="/" class="wsite-menu-item" style={{position: "relative"}}>About Us</a>
                    </li>

                    <li id="pg888509913506440713" class="wsite-menu-item-wrap     wsite-nav-3" style={{position: "relative"}}>
                      <a href="/" class="wsite-menu-item" style={{position: "relative"}}> What We Do</a>
                    </li>

                    <li id="pg484568110258166471" class="wsite-menu-item-wrap     wsite-nav-4" style={{position: "relative"}}>
                      <a href="/" class="wsite-menu-item" style={{position: "relative"}}>Donations &amp; Support</a>
                    </li>

                    <li id="pg894896054636641398" class="wsite-menu-item-wrap     wsite-nav-5" style={{position: "relative"}}>
                      <a href="/" class="wsite-menu-item" style={{position: "relative"}}>
                        CAS Adoption Centre
                      </a>
                    </li>

                    <li id="pg930309629317499279" class="wsite-menu-item-wrap     wsite-nav-6" style={{position: "relative"}}>
                      <a href="/" class="wsite-menu-item" style={{position: "relative"}}>
                        Animals In Our Care
                      </a>
                    </li>

                    <li id="pg513336365494196420" class="wsite-menu-item-wrap " style={{position: "relative", display: "none"}}>
                      <a href="/" class="wsite-menu-item" style={{position: "relative"}}>
                        Tips on Strays
                      </a>
                    </li>

                    <li id="pg782204270873181821" class="wsite-menu-item-wrap " style={{position: "relative", display: "none"}}>
                      <a href="/" class="wsite-menu-item" style={{position: "relative"}}>
                        R&amp;R Fund Appeal
                      </a>
                    </li>

                    <li id="pg156982896999316767" class="wsite-menu-item-wrap " style={{position: "relative", display: "none"}}>
                      <a href="/" class="wsite-menu-item" style={{position: "relative"}}>
                        Merchandise
                      </a>
                    </li>

                    <li class="wsite-menu-item-wrap wsite-nav-more    wsite-nav-7" style={{position: "relative", display: "block"}}>
                      <a href="/" class="wsite-menu-item" id="wsite-nav-more-a" style={{position: "relative"}}>
                        more...
                      </a>
                    </li>
                </ul>
                <div style={{clear:"both"}}></div>
              </div>
            </div>

            <div id="main-wrap">
              <div class="container">
                <div id="main">
                  <div id="content">
                    <div id="wsite-content" class="wsite-elements wsite-not-footer">
                      <div>
                        <div class="wsite-multicol">
                          <div class="wsite-multicol-table-wrap" style={{margin:"0 -15px"}}>
                            <table class="wsite-multicol-table">
                              <tbody class="wsite-multicol-tbody">
                                <tr class="wsite-multicol-tr">
                                  <td class="wsite-multicol-col" style={{width:"74.146845915202%", padding:"0 15px"}}>
                                    <div class="paragraph" style= {{fontWeight:"800"}}> <font color="#8d2424" size="5">ADOPT OR SPONSOR US!</font> </div>
                                    <div class="paragraph" style={{textAlign: "left", paddingTop: "10px"}}>
                                      <font color="#626262" size="4"><strong>Adoptions</strong></font><br />
                                    </div>
                                    <p> <font size="3">These are some of the wonderful animals we have available for adoption.</font> </p>
                                    <p> If you live in HDB (public housing) you can adopt a suitable dog under Project Adore (ADOption and Rehoming&nbsp;of dogs).&nbsp; </p>
                                    <div class="wsite-image wsite-image-border-none "
                                      style={{paddingTop:"10px", paddingBottom:"10px", marginLeft:"0px", marginRight:"0px", textAlign:"center"}}>
                                      <a href="/">
                                        <img
                                          src={require('./image/adore_project.jpg')} style={{width:175, maxWidth:"100%"}} />
                                      </a>
                                      <div style={{display:"block", fontSize:"90%"}}></div>
                                    </div>

                                    <div class="paragraph" style={{textAlign: "left", paddingTop: "10px", fontWeight:"800"}}>
                                      <font color="#626262" size="4"><strong>Sponsorship</strong></font><br />
                                    </div>
                                    <p> If you would like to sponsor any of these animals while they are waiting to be adopted, please click on dog's image</p>
                                  </td>
                                  <td class="wsite-multicol-col" style={{width:"25.853154084798%", padding:"0 15px"}}>
                                    <div>
                                      <div class="wsite-image wsite-image-border-none "
                                        style={{paddingTop:"10px",paddingBottom:"10px",marginLeft:"10px",marginRight:0,textAlign:"right"}}>
                                        <a href="/">
                                          <img src={require('./image/adoption_image.png')} alt="adoption picture" style={{width:"auto", maxWidth:"100%"}}></img>
                                        </a>
                                        <div style={{display:"block",fontSize:"90%"}}></div>
                                      </div>
                                    </div>

                                    <div class="paragraph" style={{textAlign:"left"}}><strong>
                                        <font size="3" color="#626262">Adoption Process</font>
                                      </strong><br /><em><span>Ready to adopt?&nbsp;</span><span>Want to know more about how CAS
                                          adoptions work? <a href="/">Click here...</a></span></em>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>

                      <div>
                        <div style={{height: "20px", overflow: "hidden", width: "100%"}}></div>
                        <div style={{height: "20px", overflow: "hidden", width: "100%"}}></div>
                      </div>

                      <div>
                        <div class="wsite-multicol">
                          <div class="wsite-multicol-table-wrap" style={{margin:"0 -15px"}}>
                            <table class="wsite-multicol-table">
                              <tbody class="wsite-multicol-tbody">
                                <tr class="wsite-multicol-tr">
                                  <td class="wsite-multicol-col" style={{width:"47.395191815021%", padding:"0 15px"}}>
                                    <div class="paragraph" style= {{fontWeight:"800"}}> <font color="#8d2424" size="5">DOGS FOR ADOPTION</font> </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div class="wsite-spacer" style={{height:"10px"}}></div>
                    </div>
                  </div>
                </div>
             </div>
            </div>
          </div>
        </div>
  }
}


export default SiteLayout; 