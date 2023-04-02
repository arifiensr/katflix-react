function LargeCard() {
  return (
    <>
<div className="d-flex justify-content-between align-items-center p-4 pb-0 mb-0">
        <h5><a href="#">New Releases</a></h5>
        <h5><a href="#">More</a></h5>
      </div>
      {/* <!-- * Cards Start --> */}
      <div className="cards-lg">
        {/* <!-- * 1st Large Card --> */}
        <div className="card-lg-1">
          <div className="card bg-dark" data-bs-toggle="modal" data-bs-target="#firstCardModal">
            <div className="poster">
              <img src="https://resizing.flixster.com/SKYj-nTZxPCuA0S2CYE-SrlHhhw=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2Y5MjdmYjM4LWM0MjItNDI1OC04ODY0LTU1NDc4NmRlMzdhNi5qcGc=" alt="" />
            </div>
            <div className="details">
              <h2 className="title">Emily (2023)</h2>
              <h3>Directed by Frances O'Connor</h3>
              <div className="rating">
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bx-star"></i>
                <span>4.4/5</span>
              </div>
              <div className="tags">
                <span>Biography</span>
                <span>History</span>
              </div>
              <div className="info">
                <p>EMILY imagines Emily Brontë's own Gothic story that inspired her seminal novel, "Wuthering Heights." Haunted by the death of her mother...</p>
              </div>
              <div className="cast">
                <h5>Cast</h5>
                <ul>
                  <li><img src="https://resizing.flixster.com/CMGjyD6T4AKWQS0xRvDVRFDLgKw=/100x120/v2/https://flxt.tmsimg.com/assets/1209177_v9_ba.jpg" alt="" /></li>
                  <li><img src="https://resizing.flixster.com/7CpysI8tPX8_KRX7gcUw4lUJ1Ww=/100x120/v2/https://flxt.tmsimg.com/assets/990775_v9_ba.jpg" alt="" /></li>
                  <li><img src="https://resizing.flixster.com/ezusSZefDi6BBrFB3c-_EpcvZfA=/100x120/v2/https://flxt.tmsimg.com/assets/578793_v9_bc.jpg" alt="" /></li>
                  <li><img src="https://resizing.flixster.com/aY7Den7anAtS88cMH_4NtQMZfx8=/100x120/v2/https://flxt.tmsimg.com/assets/707096_v9_bb.jpg" alt="" /></li>
                  <li><img src="https://resizing.flixster.com/x5nBcfsxNQHi0oGDJmtQaiBmcmo=/100x120/v2/https://flxt.tmsimg.com/assets/72287_v9_bb.jpg" alt="" /></li>
                </ul>
              </div>
            </div>
          </div>
          {/* <!-- Modal --> */}
          <div className="modal fade z-14 modal-xl" id="firstCardModal" tabIndex="-1" aria-labelledby="firstCardModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
              <div className="modal-content">
                <div className="modal-header modal-header-img-1">
                  <div className="modal-close-button" data-bs-dismiss="modal" aria-label="Close">
                    <i className="bx bx-x"></i>
                  </div>
                </div>
                <div className="modal-body d-flex align-items-start">
                  <div className="modal-poster">
                    <img src="https://resizing.flixster.com/SKYj-nTZxPCuA0S2CYE-SrlHhhw=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2Y5MjdmYjM4LWM0MjItNDI1OC04ODY0LTU1NDc4NmRlMzdhNi5qcGc=" alt="" />
                  </div>
                  <div className="modal-desc">
                    <h2 className="title">Emily (2023)</h2>
                    <h3>Directed by Frances O'Connor</h3>
                    <div className="rating">
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bx-star"></i>
                      <span>4.4/5</span>
                    </div>
                    <div className="tags">
                      <span>Biography</span>
                      <span>History</span>
                    </div>
                    <div className="info">
                      <p>EMILY imagines Emily Brontë's own Gothic story that inspired her seminal novel, "Wuthering Heights." Haunted by the death of her mother, Emily struggles within the confines of her family life and yearns for artistic and personal freedom, and so begins a journey to channel her creative potential into one of the greatest novels of all time.</p>
                    </div>
                    <div className="cast-trailer">
                      <div className="cast">
                        <h5>Cast</h5>
                        <ul>
                          <li><img src="https://resizing.flixster.com/CMGjyD6T4AKWQS0xRvDVRFDLgKw=/100x120/v2/https://flxt.tmsimg.com/assets/1209177_v9_ba.jpg" alt="" /></li>
                          <li><img src="https://resizing.flixster.com/7CpysI8tPX8_KRX7gcUw4lUJ1Ww=/100x120/v2/https://flxt.tmsimg.com/assets/990775_v9_ba.jpg" alt="" /></li>
                          <li><img src="https://resizing.flixster.com/ezusSZefDi6BBrFB3c-_EpcvZfA=/100x120/v2/https://flxt.tmsimg.com/assets/578793_v9_bc.jpg" alt="" /></li>
                          <li><img src="https://resizing.flixster.com/aY7Den7anAtS88cMH_4NtQMZfx8=/100x120/v2/https://flxt.tmsimg.com/assets/707096_v9_bb.jpg" alt="" /></li>
                          <li><img src="https://resizing.flixster.com/x5nBcfsxNQHi0oGDJmtQaiBmcmo=/100x120/v2/https://flxt.tmsimg.com/assets/72287_v9_bb.jpg" alt="" /></li>
                        </ul>
                      </div>
                      <div className="btn-modal">
                        <button type="button" className="modal-button modal-button-1" onClick={() => window.open('https://www.youtube.com/watch?v=xaL90sMAzbY')}>Watch Trailer</button>
                        <button type="button" className="modal-button modal-button-2">Watch Now!</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- * 2nd Large Card --> */}
        <div className="card-lg-2">
          <div className="card bg-dark" data-bs-toggle="modal" data-bs-target="#secondCardModal">
            <div className="poster">
              <img src="https://resizing.flixster.com/k4O2dPmx9brEPScWUiuFiayMHpo=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2M3ODEzY2Q4LTc4YWEtNDQ0OC1hNGQ0LTU0NGQzZWJjMzNhMy5qcGc=" alt="" />
            </div>
            <div className="details">
              <h2 className="title">The Whale (2022)</h2>
              <h3>Directed by Darren Aronofsky</h3>
              <div className="rating">
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bx-star"></i>
                <i className="bx bx-star"></i>
                <span>3.3/5</span>
              </div>
              <div className="tags">
                <span>Drama</span>
                <span>Romance</span>
              </div>
              <div className="info">
                <p>A reclusive English teacher suffering from severe obesity attempts to reconnect with his estranged teenage daughter for one last chance at redemption.</p>
              </div>
              <div className="cast">
                <h5>Cast</h5>
                <ul>
                  <li><img src="https://resizing.flixster.com/woH_AaFhGiLYNeRP8txdMC3BFZ4=/100x120/v2/https://flxt.tmsimg.com/assets/71705_v9_bb.jpg" alt="" /></li>
                  <li><img src="https://resizing.flixster.com/abOEAjjYRkyvDAurC6bMJn7yuVc=/100x120/v2/https://flxt.tmsimg.com/assets/785124_v9_bc.jpg" alt="" /></li>
                  <li><img src="https://resizing.flixster.com/LrxrlRx_ONJwIsrxIcD9h3Ns_AI=/100x120/v2/https://flxt.tmsimg.com/assets/566394_v9_bb.jpg" alt="" /></li>
                  <li><img src="https://resizing.flixster.com/_vOWg_KJhmT47NE4PdxlQc1fDfg=/100x120/v2/https://flxt.tmsimg.com/assets/493673_v9_bc.jpg" alt="" /></li>
                  <li><img src="https://resizing.flixster.com/r52x4GX7s2nog-nxDKbrSNvGgQs=/100x120/v2/https://flxt.tmsimg.com/assets/81158_v9_bb.jpg" alt="" /></li>
                </ul>
              </div>
            </div>
          </div>
          {/* <!-- Modal --> */}
          <div className="modal fade z-14 modal-xl" id="secondCardModal" tabIndex="-1" aria-labelledby="secondCardModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
              <div className="modal-content">
                <div className="modal-header modal-header-img-2">
                  <div className="modal-close-button" data-bs-dismiss="modal" aria-label="Close">
                    <i className="bx bx-x"></i>
                  </div>
                </div>
                <div className="modal-body d-flex align-items-start">
                  <div className="modal-poster">
                    <img src="https://resizing.flixster.com/k4O2dPmx9brEPScWUiuFiayMHpo=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2M3ODEzY2Q4LTc4YWEtNDQ0OC1hNGQ0LTU0NGQzZWJjMzNhMy5qcGc=" alt="" />
                  </div>
                  <div className="modal-desc">
                    <h2 className="title">The Whale (2022)</h2>
                    <h3>Directed by Darren Aronofsky</h3>
                    <div className="rating">
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bx-star"></i>
                      <i className="bx bx-star"></i>
                      <span>3.3/5</span>
                    </div>
                    <div className="tags">
                      <span>Drama</span>
                      <span>Romance</span>
                    </div>
                    <div className="info">
                      <p>A reclusive English teacher suffering from severe obesity attempts to reconnect with his estranged teenage daughter for one last chance at redemption.</p>
                    </div>
                    <div className="cast-trailer">
                      <div className="cast">
                        <h5>Cast</h5>
                        <ul>
                          <li><img src="https://resizing.flixster.com/woH_AaFhGiLYNeRP8txdMC3BFZ4=/100x120/v2/https://flxt.tmsimg.com/assets/71705_v9_bb.jpg" alt="" /></li>
                          <li><img src="https://resizing.flixster.com/abOEAjjYRkyvDAurC6bMJn7yuVc=/100x120/v2/https://flxt.tmsimg.com/assets/785124_v9_bc.jpg" alt="" /></li>
                          <li><img src="https://resizing.flixster.com/LrxrlRx_ONJwIsrxIcD9h3Ns_AI=/100x120/v2/https://flxt.tmsimg.com/assets/566394_v9_bb.jpg" alt="" /></li>
                          <li><img src="https://resizing.flixster.com/_vOWg_KJhmT47NE4PdxlQc1fDfg=/100x120/v2/https://flxt.tmsimg.com/assets/493673_v9_bc.jpg" alt="" /></li>
                          <li><img src="https://resizing.flixster.com/r52x4GX7s2nog-nxDKbrSNvGgQs=/100x120/v2/https://flxt.tmsimg.com/assets/81158_v9_bb.jpg" alt="" /></li>
                        </ul>
                      </div>
                      <div className="btn-modal">
                        <button type="button" className="modal-button modal-button-1" onClick={() => window.open('https://www.youtube.com/watch?v=nWiQodhMvz4')}>Watch Trailer</button>
                        <button type="button" className="modal-button modal-button-2">Watch Now!</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- * 3rd Large Card --> */}
        <div className="card-lg-3">
          <div className="card bg-dark" data-bs-toggle="modal" data-bs-target="#thirdCardModal">
            <div className="poster">
              <img src="https://resizing.flixster.com/gWWM2Ov0VLAuazwELZCVc9grUQI=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzgyMGM0ZDJiLWNmYjAtNGI3NS1hYTgzLTQ5YmU2ZjQwZWE0ZC5qcGc=" alt="" />
            </div>
            <div className="details">
              <h2 className="title">Avatar:<br />The Way Of Water (2022)</h2>
              <h3>Directed by James Cameron</h3>
              <div className="rating">
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bx-star"></i>
                <i className="bx bx-star"></i>
                <span>3.8/5</span>
              </div>
              <div className="tags">
                <span>Sci-Fi</span>
                <span>Adventure</span>
              </div>
              <div className="info">
                <p>Set more than a decade after the events of the first film, "Avatar: The Way of Water" begins to tell the story of the Sully family (Jake, Neytiri, and their kids), the trouble...</p>
              </div>
              <div className="cast">
                <h5>Cast</h5>
                <ul>
                  <li><img src="https://resizing.flixster.com/OMwb6yZXKNAdV1chaDVbjpX23gY=/100x120/v2/https://flxt.tmsimg.com/assets/218027_v9_bb.jpg" alt="" /></li>
                  <li><img src="https://resizing.flixster.com/9dzDy_YPVGFeEmXI1AM5zC3dgig=/100x120/v2/https://flxt.tmsimg.com/assets/194024_v9_bb.jpg" alt="" /></li>
                  <li><img src="https://resizing.flixster.com/2T-jtfm6BgiDv7C9Bn1CLDHoPeE=/100x120/v2/https://flxt.tmsimg.com/assets/1898_v9_bc.jpg" alt="" /></li>
                  <li><img src="https://resizing.flixster.com/o_0cQ3_e4ZkG5HBGf_GFhh-v5aA=/100x120/v2/https://flxt.tmsimg.com/assets/73978_v9_bb.jpg" alt="" /></li>
                  <li><img src="https://resizing.flixster.com/kUxTVLOtJDkjSpEmiSLyRR2Xylk=/100x120/v2/https://flxt.tmsimg.com/assets/151910_v9_bc.jpg" alt="" /></li>
                </ul>
              </div>
            </div>
          </div>
          {/* <!-- Modal --> */}
          <div className="modal fade z-14 modal-xl" id="thirdCardModal" tabIndex="-1" aria-labelledby="thirdCardModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
              <div className="modal-content">
                <div className="modal-header modal-header-img-3">
                  <div className="modal-close-button" data-bs-dismiss="modal" aria-label="Close">
                    <i className="bx bx-x"></i>
                  </div>
                </div>
                <div className="modal-body d-flex align-items-start">
                  <div className="modal-poster">
                    <img src="https://resizing.flixster.com/gWWM2Ov0VLAuazwELZCVc9grUQI=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzgyMGM0ZDJiLWNmYjAtNGI3NS1hYTgzLTQ5YmU2ZjQwZWE0ZC5qcGc=" alt="" />
                  </div>
                  <div className="modal-desc">
                    <h2 className="title">Avatar: The Way Of Water (2022)</h2>
                    <h3>Directed by James Cameron</h3>
                    <div className="rating">
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bx-star"></i>
                      <span>3.8/5</span>
                    </div>
                    <div className="tags">
                      <span>Sci-Fi</span>
                      <span>Adventure</span>
                    </div>
                    <div className="info">
                      <p>Set more than a decade after the events of the first film, "Avatar: The Way of Water" begins to tell the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.</p>
                    </div>
                    <div className="cast-trailer">
                      <div className="cast">
                        <h5>Cast</h5>
                        <ul>
                          <li><img src="https://resizing.flixster.com/OMwb6yZXKNAdV1chaDVbjpX23gY=/100x120/v2/https://flxt.tmsimg.com/assets/218027_v9_bb.jpg" alt="" /></li>
                          <li><img src="https://resizing.flixster.com/9dzDy_YPVGFeEmXI1AM5zC3dgig=/100x120/v2/https://flxt.tmsimg.com/assets/194024_v9_bb.jpg" alt="" /></li>
                          <li><img src="https://resizing.flixster.com/2T-jtfm6BgiDv7C9Bn1CLDHoPeE=/100x120/v2/https://flxt.tmsimg.com/assets/1898_v9_bc.jpg" alt="" /></li>
                          <li><img src="https://resizing.flixster.com/o_0cQ3_e4ZkG5HBGf_GFhh-v5aA=/100x120/v2/https://flxt.tmsimg.com/assets/73978_v9_bb.jpg" alt="" /></li>
                          <li><img src="https://resizing.flixster.com/kUxTVLOtJDkjSpEmiSLyRR2Xylk=/100x120/v2/https://flxt.tmsimg.com/assets/151910_v9_bc.jpg" alt="" /></li>
                        </ul>
                      </div>
                      <div className="btn-modal">
                        <button type="button" className="modal-button modal-button-1" onClick={() => window.open('https://www.youtube.com/watch?v=d9MyW72ELq0')}>Watch Trailer</button>
                        <button type="button" className="modal-button modal-button-2">Watch Now!</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- * 4th Large Card --> */}
        <div className="card-lg-4">
          <div className="card bg-dark" data-bs-toggle="modal" data-bs-target="#fourthCardModal">
            <div className="poster">
              <img src="https://resizing.flixster.com/vtIcjOYiM-QBXQyXhTFFgQoRkDw=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2JmNjM3ZTc2LTk5ZmMtNGJhNy04MDAzLWI3M2IxNmExNDNkYi5qcGc=" alt="" />
            </div>
            <div className="details">
              <h2 className="title">Puss In Boots:<br />The Last Wish (2022)</h2>
              <h3>Directed by Joel Crawford</h3>
              <div className="rating">
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bx-star"></i>
                <span>4.8/5</span>
              </div>
              <div className="tags">
                <span>Comedy</span>
                <span>Adventure</span>
              </div>
              <div className="info">
                <p>This fall, everyone's favorite leche-loving, swashbuckling, fear-defying feline returns. For the first time in more than a decade, DreamWorks Animation presents a new adventure in...</p>
              </div>
              <div className="cast">
                <h5>Cast</h5>
                <ul>
                  <li><img src="https://resizing.flixster.com/juGCmzZ4gxhPo6MCBVpwARzmsk8=/100x120/v2/https://flxt.tmsimg.com/assets/5885_v9_bb.jpg" alt="" /></li>
                  <li><img src="https://resizing.flixster.com/U0O4AjPm_a1XucMoJkQyXNh7eyQ=/100x120/v2/https://flxt.tmsimg.com/assets/71233_v9_bc.jpg" alt="" /></li>
                  <li><img src="https://resizing.flixster.com/nKi20bZlVRDUsjdocU08f9b-_N8=/100x120/v2/https://flxt.tmsimg.com/assets/449885_v9_bd.jpg" alt="" /></li>
                  <li><img src="https://resizing.flixster.com/4qWXe1ZYNZf-GKya28gdN8Vlcm8=/100x120/v2/https://flxt.tmsimg.com/assets/516817_v9_bd.jpg" alt="" /></li>
                  <li><img src="https://resizing.flixster.com/HC8D04MpHlw1y9ePv4oWiHXsRpU=/100x120/v2/https://flxt.tmsimg.com/assets/1053891_v9_ba.jpg" alt="" /></li>
                </ul>
              </div>
            </div>
          </div>
          {/* <!-- Modal --> */}
          <div className="modal fade z-14 modal-xl" id="fourthCardModal" tabIndex="-1" aria-labelledby="fourthCardModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
              <div className="modal-content">
                <div className="modal-header modal-header-img-4">
                  <div className="modal-close-button" data-bs-dismiss="modal" aria-label="Close">
                    <i className="bx bx-x"></i>
                  </div>
                </div>
                <div className="modal-body d-flex align-items-start">
                  <div className="modal-poster">
                    <img src="https://resizing.flixster.com/vtIcjOYiM-QBXQyXhTFFgQoRkDw=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2JmNjM3ZTc2LTk5ZmMtNGJhNy04MDAzLWI3M2IxNmExNDNkYi5qcGc=" alt="" />
                  </div>
                  <div className="modal-desc">
                    <h2 className="title">Puss In Boots: The Last Wish (2022)</h2>
                    <h3>Directed by Joel Crawford</h3>
                    <div className="rating">
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bx-star"></i>
                      <span>4.8/5</span>
                    </div>
                    <div className="tags">
                      <span>Comedy</span>
                      <span>Adventure</span>
                    </div>
                    <div className="info">
                      <p>Academy Award® nominee Antonio Banderas returns as the voice of the notorious PiB as he embarks on an epic journey into the Black Forest to find the mythical Wishing Star and restore his lost lives. But with only one life left, Puss will have to humble himself and ask for help from his former partner and nemesis: the captivating Kitty Soft Paws (Oscar® nominee Salma Hayek). In their quest, Puss and Kitty will be aided--against their better judgment--by a ratty, chatty, relentlessly cheerful mutt, Perro (Harvey Guillén, What We Do in the Shadows).</p>
                    </div>
                    <div className="cast-trailer">
                      <div className="cast">
                        <h5>Cast</h5>
                        <ul>
                          <li><img src="https://resizing.flixster.com/juGCmzZ4gxhPo6MCBVpwARzmsk8=/100x120/v2/https://flxt.tmsimg.com/assets/5885_v9_bb.jpg" alt="" /></li>
                          <li><img src="https://resizing.flixster.com/U0O4AjPm_a1XucMoJkQyXNh7eyQ=/100x120/v2/https://flxt.tmsimg.com/assets/71233_v9_bc.jpg" alt="" /></li>
                          <li><img src="https://resizing.flixster.com/nKi20bZlVRDUsjdocU08f9b-_N8=/100x120/v2/https://flxt.tmsimg.com/assets/449885_v9_bd.jpg" alt="" /></li>
                          <li><img src="https://resizing.flixster.com/4qWXe1ZYNZf-GKya28gdN8Vlcm8=/100x120/v2/https://flxt.tmsimg.com/assets/516817_v9_bd.jpg" alt="" /></li>
                          <li><img src="https://resizing.flixster.com/HC8D04MpHlw1y9ePv4oWiHXsRpU=/100x120/v2/https://flxt.tmsimg.com/assets/1053891_v9_ba.jpg" alt="" /></li>
                        </ul>
                      </div>
                      <div className="btn-modal">
                        <button type="button" className="modal-button modal-button-1" onClick={() => window.open('https://www.youtube.com/watch?v=RqrXhwS33yc')}>Watch Trailer</button>
                        <button type="button" className="modal-button modal-button-2">Watch Now!</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- * 5th Large Card --> */}
        <div className="card-lg-5">
          <div className="card bg-dark" data-bs-toggle="modal" data-bs-target="#fifthCardModal">
            <div className="poster">
              <img src="https://assets-prd.ignimgs.com/2023/01/24/shzam2-vert-main-2764x4096-dom-1674589983500.jpg" alt="" />
            </div>
            <div className="details">
              <h2 className="title">SHAZAM!<br />Fury Of The Gods (2023)</h2>
              <h3>Directed by David F. Sandberg</h3>
              <div className="rating">
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bx-star"></i>
                <i className="bx bx-star"></i>
                <i className="bx bx-star"></i>
                <span>2.7/5</span>
              </div>
              <div className="tags">
                <span>Action</span>
                <span>Adventure</span>
              </div>
              <div className="info">
                <p>From New Line Cinema comes "Shazam! Fury of the Gods," which continues the story of teenage Billy Batson who, upon reciting the magic word "SHAZAM!," is transformed into...</p>
              </div>
              <div className="cast">
                <h5>Cast</h5>
                <ul>
                  <li><img src="https://resizing.flixster.com/9wUV9Ujaga3hCwqVwL3M53l51C0=/100x120/v2/https://flxt.tmsimg.com/assets/272823_v9_bb.jpg" alt="" /></li>
                  <li><img src="https://resizing.flixster.com/eQz-piPYeekQeFvguYgbW8IS5UA=/100x120/v2/https://flxt.tmsimg.com/assets/74573_v9_bc.jpg" alt="" /></li>
                  <li><img src="https://resizing.flixster.com/SHhdGjdiYEUspWylTwZSZbBlArM=/100x120/v2/https://flxt.tmsimg.com/assets/151593_v9_bb.jpg" alt="" /></li>
                  <li><img src="https://resizing.flixster.com/nvIjZslc_gFPwhJzaQ0DFyY7hN4=/100x120/v2/https://flxt.tmsimg.com/assets/797733_v9_bb.jpg" alt="" /></li>
                  <li><img src="https://resizing.flixster.com/lPpfbp-HU732tn1KG13SQxNGt14=/100x120/v2/https://flxt.tmsimg.com/assets/1306025_v9_aa.jpg" alt="" /></li>
                </ul>
              </div>
            </div>
          </div>
          {/* <!-- Modal --> */}
          <div className="modal fade z-14 modal-xl" id="fifthCardModal" tabIndex="-1" aria-labelledby="fifthCardModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
              <div className="modal-content">
                <div className="modal-header modal-header-img-5">
                  <div className="modal-close-button" data-bs-dismiss="modal" aria-label="Close">
                    <i className="bx bx-x"></i>
                  </div>
                </div>
                <div className="modal-body d-flex align-items-start">
                  <div className="modal-poster">
                    <img src="https://assets-prd.ignimgs.com/2023/01/24/shzam2-vert-main-2764x4096-dom-1674589983500.jpg" alt="" />
                  </div>
                  <div className="modal-desc">
                    <h2 className="title">SHAZAM! Fury Of The Gods (2023)</h2>
                    <h3>Directed by David F. Sandberg</h3>
                    <div className="rating">
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bx-star"></i>
                      <i className="bx bx-star"></i>
                      <i className="bx bx-star"></i>
                      <span>2.7/5</span>
                    </div>
                    <div className="tags">
                      <span>Action</span>
                      <span>Adventure</span>
                    </div>
                    <div className="info">
                      <p>From New Line Cinema comes "Shazam! Fury of the Gods," which continues the story of teenage Billy Batson who, upon reciting the magic word "SHAZAM!," is transformed into his adult Super Hero alter ego, Shazam.</p>
                    </div>
                    <div className="cast-trailer">
                      <div className="cast">
                        <h5>Cast</h5>
                        <ul>
                          <li><img src="https://resizing.flixster.com/9wUV9Ujaga3hCwqVwL3M53l51C0=/100x120/v2/https://flxt.tmsimg.com/assets/272823_v9_bb.jpg" alt="" /></li>
                          <li><img src="https://resizing.flixster.com/eQz-piPYeekQeFvguYgbW8IS5UA=/100x120/v2/https://flxt.tmsimg.com/assets/74573_v9_bc.jpg" alt="" /></li>
                          <li><img src="https://resizing.flixster.com/SHhdGjdiYEUspWylTwZSZbBlArM=/100x120/v2/https://flxt.tmsimg.com/assets/151593_v9_bb.jpg" alt="" /></li>
                          <li><img src="https://resizing.flixster.com/nvIjZslc_gFPwhJzaQ0DFyY7hN4=/100x120/v2/https://flxt.tmsimg.com/assets/797733_v9_bb.jpg" alt="" /></li>
                          <li><img src="https://resizing.flixster.com/lPpfbp-HU732tn1KG13SQxNGt14=/100x120/v2/https://flxt.tmsimg.com/assets/1306025_v9_aa.jpg" alt="" /></li>
                        </ul>
                      </div>
                      <div className="btn-modal">
                        <button type="button" className="modal-button modal-button-1" onClick={() => window.open('https://www.youtube.com/watch?v=AIc671o9yCI')}>Watch Trailer</button>
                        <button type="button" className="modal-button modal-button-2">Watch Now!</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LargeCard