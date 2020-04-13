Object.assign(window.search, {"doc_urls":["TODO.html#contribution","TODO.html#contribution","TODO.html#contribution","api_internal.html#internal","api_internal.html#updates","TODO.html#contribution","contribution/releases.html#releases","contribution/releases.html#process","contribution/releases.html#minor","contribution/releases.html#patch","contribution/releases.html#creating-artifacts"],"index":{"documentStore":{"docInfo":{"0":{"body":0,"breadcrumbs":1,"title":1},"1":{"body":0,"breadcrumbs":1,"title":1},"10":{"body":32,"breadcrumbs":3,"title":2},"2":{"body":0,"breadcrumbs":1,"title":1},"3":{"body":22,"breadcrumbs":2,"title":1},"4":{"body":9,"breadcrumbs":2,"title":1},"5":{"body":0,"breadcrumbs":1,"title":1},"6":{"body":23,"breadcrumbs":2,"title":1},"7":{"body":0,"breadcrumbs":2,"title":1},"8":{"body":33,"breadcrumbs":2,"title":1},"9":{"body":36,"breadcrumbs":2,"title":1}},"docs":{"0":{"body":"","breadcrumbs":"Contribution","id":"0","title":"Contribution"},"1":{"body":"","breadcrumbs":"Contribution","id":"1","title":"Contribution"},"10":{"body":"Clair's artifact release process is automated and driven off the releases in Github. Publishing a new release in the Github UI automatically triggers the creation of a complete source archive and a container. The archive is attached to the release, and the container is pushed to the quay.io/projectquay/clair repository. This is all powered by a Github Action in .github/workflows/cut-release.yml.","breadcrumbs":"Contribution » Creating Artifacts","id":"10","title":"Creating Artifacts"},"2":{"body":"","breadcrumbs":"Contribution","id":"2","title":"Contribution"},"3":{"body":"Internal endpoints are underneath /api/v1/internal and are meant for communication between Clair microservices. If Clair is operating in combo mode, these endpoints may not exist. Any sort of API ingress should disallow clients to talk to these endpoints.","breadcrumbs":"API » Internal","id":"3","title":"Internal"},"4":{"body":"The updates/ endpoints expose information about updater operations for use by the notifier process.","breadcrumbs":"API » Updates","id":"4","title":"Updates"},"5":{"body":"","breadcrumbs":"Contribution","id":"5","title":"Contribution"},"6":{"body":"Clair releases are cut roughly every three months and actively maintained for six. This means that bugfixes should be landed on master (if applicable) and then marked for backporting to a minor version's release branch. The process for doing this is not yet formalized.","breadcrumbs":"Contribution » Releases","id":"6","title":"Releases"},"7":{"body":"","breadcrumbs":"Contribution » Process","id":"7","title":"Process"},"8":{"body":"When cutting a new minor release, two things need to be done: creating a tag and creating a release branch. This can be done like so: git tag -as v4.x.0 HEAD\ngit push upstream HEAD:release-4.x tag v4.x.0 Then, a \"release\" needs to be created in the Github UI using the created tag.","breadcrumbs":"Contribution » Minor","id":"8","title":"Minor"},"9":{"body":"A patch release is just like a minor release with the caveat that minor version tags should only appear on release branches and a new branch does not need to be created. git checkout release-4.x\ngit tag -as v4.x.1 HEAD\ngit push upstream tag v4.x.1 Then, a \"release\" needs to be created in the Github UI using the created tag.","breadcrumbs":"Contribution » Patch","id":"9","title":"Patch"}},"length":11,"save":true},"fields":["title","body","breadcrumbs"],"index":{"body":{"root":{"4":{".":{"df":0,"docs":{},"x":{"df":2,"docs":{"8":{"tf":1.0},"9":{"tf":1.0}}}},"df":0,"docs":{}},"a":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"10":{"tf":1.0}}}},"v":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"/":{"df":0,"docs":{},"v":{"1":{"/":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":1,"docs":{"3":{"tf":1.0}}},"p":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"9":{"tf":1.0}}}},"df":0,"docs":{}},"l":{"df":0,"docs":{},"i":{"c":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}}}}},"r":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"v":{"df":1,"docs":{"10":{"tf":1.4142135623730951}}}}}},"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"f":{"a":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"10":{"tf":1.4142135623730951}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"t":{"df":0,"docs":{},"t":{"a":{"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"10":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"u":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"10":{"tf":1.0}}}},"df":1,"docs":{"10":{"tf":1.0}}}}}}},"b":{"a":{"c":{"df":0,"docs":{},"k":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"6":{"tf":1.0}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"w":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}},"r":{"a":{"df":0,"docs":{},"n":{"c":{"df":0,"docs":{},"h":{"df":3,"docs":{"6":{"tf":1.0},"8":{"tf":1.0},"9":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"u":{"df":0,"docs":{},"g":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"x":{"df":1,"docs":{"6":{"tf":1.0}}}}}}}},"c":{"a":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"9":{"tf":1.0}}}},"df":0,"docs":{}}}},"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"k":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"9":{"tf":1.0}}}}}}},"df":0,"docs":{}}},"l":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"r":{"'":{"df":1,"docs":{"10":{"tf":1.0}}},"df":2,"docs":{"3":{"tf":1.4142135623730951},"6":{"tf":1.0}}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"o":{"df":0,"docs":{},"m":{"b":{"df":0,"docs":{},"o":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{},"m":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"df":1,"docs":{"3":{"tf":1.0}}}}},"p":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"10":{"tf":1.0}}}}}}},"n":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"10":{"tf":1.4142135623730951}}}}},"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"b":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":4,"docs":{"0":{"tf":1.0},"1":{"tf":1.0},"2":{"tf":1.0},"5":{"tf":1.0}}}}},"df":0,"docs":{}}}}}},"r":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"t":{"df":3,"docs":{"10":{"tf":1.0},"8":{"tf":2.0},"9":{"tf":1.7320508075688772}},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"10":{"tf":1.0}}}}}}},"df":0,"docs":{}}},"u":{"df":0,"docs":{},"t":{"df":2,"docs":{"6":{"tf":1.0},"8":{"tf":1.0}}}}},"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"df":0,"docs":{}}},"o":{"df":1,"docs":{"6":{"tf":1.0}},"n":{"df":0,"docs":{},"e":{"df":1,"docs":{"8":{"tf":1.4142135623730951}}}}},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"10":{"tf":1.0}}}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":2,"docs":{"3":{"tf":1.7320508075688772},"4":{"tf":1.0}}}}}}}},"df":0,"docs":{}},"x":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"df":1,"docs":{"4":{"tf":1.0}}}}}}},"f":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"6":{"tf":1.0}}}},"df":0,"docs":{}}}}},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":2,"docs":{"8":{"tf":1.4142135623730951},"9":{"tf":1.7320508075688772}},"h":{"df":0,"docs":{},"u":{"b":{"/":{"df":0,"docs":{},"w":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"k":{"df":0,"docs":{},"f":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":0,"docs":{},"s":{"/":{"c":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"10":{"tf":1.0}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}}}}},"df":3,"docs":{"10":{"tf":1.7320508075688772},"8":{"tf":1.0},"9":{"tf":1.0}}},"df":0,"docs":{}}}}}},"h":{"df":0,"docs":{},"e":{"a":{"d":{":":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"s":{"df":1,"docs":{"8":{"tf":1.0}}}},"df":0,"docs":{}}}}}},"df":2,"docs":{"8":{"tf":1.0},"9":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"f":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"g":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}}}}}},"l":{"a":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}},"m":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"6":{"tf":1.0}}}}},"df":0,"docs":{}}}},"r":{"df":0,"docs":{},"k":{"df":1,"docs":{"6":{"tf":1.0}}}},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"6":{"tf":1.0}}}}}}},"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"n":{"df":1,"docs":{"6":{"tf":1.0}},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}},"df":0,"docs":{}},"i":{"c":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"v":{"df":0,"docs":{},"i":{"c":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}}}}}}}},"df":0,"docs":{},"n":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":3,"docs":{"6":{"tf":1.0},"8":{"tf":1.4142135623730951},"9":{"tf":1.4142135623730951}}}}}},"o":{"d":{"df":0,"docs":{},"e":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":1,"docs":{"6":{"tf":1.0}}}}}}},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"d":{"df":2,"docs":{"8":{"tf":1.4142135623730951},"9":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"w":{"df":3,"docs":{"10":{"tf":1.0},"8":{"tf":1.0},"9":{"tf":1.0}}}},"o":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":1,"docs":{"4":{"tf":1.0}}}}}}}},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":2,"docs":{"3":{"tf":1.0},"4":{"tf":1.0}}}}}},"p":{"a":{"df":0,"docs":{},"t":{"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"9":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}},"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"10":{"tf":1.0}}}}}},"r":{"df":0,"docs":{},"o":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":4,"docs":{"10":{"tf":1.0},"4":{"tf":1.0},"6":{"tf":1.0},"7":{"tf":1.0}}}}}},"df":0,"docs":{}}},"u":{"b":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"h":{"df":1,"docs":{"10":{"tf":1.0}}}}}}},"df":0,"docs":{},"s":{"df":0,"docs":{},"h":{"df":3,"docs":{"10":{"tf":1.0},"8":{"tf":1.0},"9":{"tf":1.0}}}}}},"q":{"df":0,"docs":{},"u":{"a":{"df":0,"docs":{},"y":{".":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"/":{"df":0,"docs":{},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"j":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"q":{"df":0,"docs":{},"u":{"a":{"df":0,"docs":{},"y":{"/":{"c":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"r":{"df":1,"docs":{"10":{"tf":1.0}}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"s":{"df":4,"docs":{"10":{"tf":2.0},"6":{"tf":1.7320508075688772},"8":{"tf":1.7320508075688772},"9":{"tf":2.23606797749979}},"e":{".":{"df":0,"docs":{},"y":{"df":0,"docs":{},"m":{"df":0,"docs":{},"l":{"df":1,"docs":{"10":{"tf":1.0}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"10":{"tf":1.0}}}}}}}}}}},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"g":{"df":0,"docs":{},"h":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":1,"docs":{"6":{"tf":1.0}}}}}}}}},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"x":{"df":1,"docs":{"6":{"tf":1.0}}}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}},"u":{"df":0,"docs":{},"r":{"c":{"df":1,"docs":{"10":{"tf":1.0}}},"df":0,"docs":{}}}}},"t":{"a":{"df":0,"docs":{},"g":{"df":2,"docs":{"8":{"tf":2.0},"9":{"tf":2.0}}},"l":{"df":0,"docs":{},"k":{"df":1,"docs":{"3":{"tf":1.0}}}}},"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":1,"docs":{"8":{"tf":1.0}}}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"10":{"tf":1.0}}}}}}}},"w":{"df":0,"docs":{},"o":{"df":1,"docs":{"8":{"tf":1.0}}}}},"u":{"df":0,"docs":{},"i":{"df":3,"docs":{"10":{"tf":1.0},"8":{"tf":1.0},"9":{"tf":1.0}}},"n":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":1,"docs":{"3":{"tf":1.0}}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}},"p":{"d":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.7320508075688772}}}},"df":0,"docs":{}},"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"m":{"df":2,"docs":{"8":{"tf":1.0},"9":{"tf":1.0}}}},"df":0,"docs":{}}}}}},"s":{"df":3,"docs":{"4":{"tf":1.0},"8":{"tf":1.0},"9":{"tf":1.0}}}},"v":{"4":{".":{"df":0,"docs":{},"x":{".":{"0":{"df":1,"docs":{"8":{"tf":1.4142135623730951}}},"1":{"df":1,"docs":{"9":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"'":{"df":1,"docs":{"6":{"tf":1.0}}},"df":1,"docs":{"9":{"tf":1.0}}}}}}}}}}},"breadcrumbs":{"root":{"4":{".":{"df":0,"docs":{},"x":{"df":2,"docs":{"8":{"tf":1.0},"9":{"tf":1.0}}}},"df":0,"docs":{}},"a":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"10":{"tf":1.0}}}},"v":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"/":{"df":0,"docs":{},"v":{"1":{"/":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":2,"docs":{"3":{"tf":1.4142135623730951},"4":{"tf":1.0}}},"p":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"9":{"tf":1.0}}}},"df":0,"docs":{}},"l":{"df":0,"docs":{},"i":{"c":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}}}}},"r":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"v":{"df":1,"docs":{"10":{"tf":1.4142135623730951}}}}}},"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"f":{"a":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"10":{"tf":1.7320508075688772}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"t":{"df":0,"docs":{},"t":{"a":{"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"10":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"u":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"10":{"tf":1.0}}}},"df":1,"docs":{"10":{"tf":1.0}}}}}}},"b":{"a":{"c":{"df":0,"docs":{},"k":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"6":{"tf":1.0}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"w":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}},"r":{"a":{"df":0,"docs":{},"n":{"c":{"df":0,"docs":{},"h":{"df":3,"docs":{"6":{"tf":1.0},"8":{"tf":1.0},"9":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"u":{"df":0,"docs":{},"g":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"x":{"df":1,"docs":{"6":{"tf":1.0}}}}}}}},"c":{"a":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"9":{"tf":1.0}}}},"df":0,"docs":{}}}},"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"k":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"9":{"tf":1.0}}}}}}},"df":0,"docs":{}}},"l":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"r":{"'":{"df":1,"docs":{"10":{"tf":1.0}}},"df":2,"docs":{"3":{"tf":1.4142135623730951},"6":{"tf":1.0}}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"o":{"df":0,"docs":{},"m":{"b":{"df":0,"docs":{},"o":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{},"m":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"df":1,"docs":{"3":{"tf":1.0}}}}},"p":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"10":{"tf":1.0}}}}}}},"n":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"10":{"tf":1.4142135623730951}}}}},"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"b":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":9,"docs":{"0":{"tf":1.4142135623730951},"1":{"tf":1.4142135623730951},"10":{"tf":1.0},"2":{"tf":1.4142135623730951},"5":{"tf":1.4142135623730951},"6":{"tf":1.0},"7":{"tf":1.0},"8":{"tf":1.0},"9":{"tf":1.0}}}}},"df":0,"docs":{}}}}}},"r":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"t":{"df":3,"docs":{"10":{"tf":1.4142135623730951},"8":{"tf":2.0},"9":{"tf":1.7320508075688772}},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"10":{"tf":1.0}}}}}}},"df":0,"docs":{}}},"u":{"df":0,"docs":{},"t":{"df":2,"docs":{"6":{"tf":1.0},"8":{"tf":1.0}}}}},"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"df":0,"docs":{}}},"o":{"df":1,"docs":{"6":{"tf":1.0}},"n":{"df":0,"docs":{},"e":{"df":1,"docs":{"8":{"tf":1.4142135623730951}}}}},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"10":{"tf":1.0}}}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":2,"docs":{"3":{"tf":1.7320508075688772},"4":{"tf":1.0}}}}}}}},"df":0,"docs":{}},"x":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"df":1,"docs":{"4":{"tf":1.0}}}}}}},"f":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"6":{"tf":1.0}}}},"df":0,"docs":{}}}}},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":2,"docs":{"8":{"tf":1.4142135623730951},"9":{"tf":1.7320508075688772}},"h":{"df":0,"docs":{},"u":{"b":{"/":{"df":0,"docs":{},"w":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"k":{"df":0,"docs":{},"f":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":0,"docs":{},"s":{"/":{"c":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"10":{"tf":1.0}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}}}}},"df":3,"docs":{"10":{"tf":1.7320508075688772},"8":{"tf":1.0},"9":{"tf":1.0}}},"df":0,"docs":{}}}}}},"h":{"df":0,"docs":{},"e":{"a":{"d":{":":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"s":{"df":1,"docs":{"8":{"tf":1.0}}}},"df":0,"docs":{}}}}}},"df":2,"docs":{"8":{"tf":1.0},"9":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"f":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"g":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"df":1,"docs":{"3":{"tf":1.7320508075688772}}}}}}}},"l":{"a":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}},"m":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"6":{"tf":1.0}}}}},"df":0,"docs":{}}}},"r":{"df":0,"docs":{},"k":{"df":1,"docs":{"6":{"tf":1.0}}}},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"6":{"tf":1.0}}}}}}},"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"n":{"df":1,"docs":{"6":{"tf":1.0}},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}},"df":0,"docs":{}},"i":{"c":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"v":{"df":0,"docs":{},"i":{"c":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}}}}}}}},"df":0,"docs":{},"n":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":3,"docs":{"6":{"tf":1.0},"8":{"tf":1.7320508075688772},"9":{"tf":1.4142135623730951}}}}}},"o":{"d":{"df":0,"docs":{},"e":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":1,"docs":{"6":{"tf":1.0}}}}}}},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"d":{"df":2,"docs":{"8":{"tf":1.4142135623730951},"9":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"w":{"df":3,"docs":{"10":{"tf":1.0},"8":{"tf":1.0},"9":{"tf":1.0}}}},"o":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":1,"docs":{"4":{"tf":1.0}}}}}}}},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":2,"docs":{"3":{"tf":1.0},"4":{"tf":1.0}}}}}},"p":{"a":{"df":0,"docs":{},"t":{"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"9":{"tf":1.7320508075688772}}}},"df":0,"docs":{}}},"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"10":{"tf":1.0}}}}}},"r":{"df":0,"docs":{},"o":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":4,"docs":{"10":{"tf":1.0},"4":{"tf":1.0},"6":{"tf":1.0},"7":{"tf":1.4142135623730951}}}}}},"df":0,"docs":{}}},"u":{"b":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"h":{"df":1,"docs":{"10":{"tf":1.0}}}}}}},"df":0,"docs":{},"s":{"df":0,"docs":{},"h":{"df":3,"docs":{"10":{"tf":1.0},"8":{"tf":1.0},"9":{"tf":1.0}}}}}},"q":{"df":0,"docs":{},"u":{"a":{"df":0,"docs":{},"y":{".":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"/":{"df":0,"docs":{},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"j":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"q":{"df":0,"docs":{},"u":{"a":{"df":0,"docs":{},"y":{"/":{"c":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"r":{"df":1,"docs":{"10":{"tf":1.0}}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"s":{"df":4,"docs":{"10":{"tf":2.0},"6":{"tf":2.0},"8":{"tf":1.7320508075688772},"9":{"tf":2.23606797749979}},"e":{".":{"df":0,"docs":{},"y":{"df":0,"docs":{},"m":{"df":0,"docs":{},"l":{"df":1,"docs":{"10":{"tf":1.0}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"10":{"tf":1.0}}}}}}}}}}},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"g":{"df":0,"docs":{},"h":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":1,"docs":{"6":{"tf":1.0}}}}}}}}},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"x":{"df":1,"docs":{"6":{"tf":1.0}}}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}},"u":{"df":0,"docs":{},"r":{"c":{"df":1,"docs":{"10":{"tf":1.0}}},"df":0,"docs":{}}}}},"t":{"a":{"df":0,"docs":{},"g":{"df":2,"docs":{"8":{"tf":2.0},"9":{"tf":2.0}}},"l":{"df":0,"docs":{},"k":{"df":1,"docs":{"3":{"tf":1.0}}}}},"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":1,"docs":{"8":{"tf":1.0}}}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"10":{"tf":1.0}}}}}}}},"w":{"df":0,"docs":{},"o":{"df":1,"docs":{"8":{"tf":1.0}}}}},"u":{"df":0,"docs":{},"i":{"df":3,"docs":{"10":{"tf":1.0},"8":{"tf":1.0},"9":{"tf":1.0}}},"n":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":1,"docs":{"3":{"tf":1.0}}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}},"p":{"d":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":2.0}}}},"df":0,"docs":{}},"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"m":{"df":2,"docs":{"8":{"tf":1.0},"9":{"tf":1.0}}}},"df":0,"docs":{}}}}}},"s":{"df":3,"docs":{"4":{"tf":1.0},"8":{"tf":1.0},"9":{"tf":1.0}}}},"v":{"4":{".":{"df":0,"docs":{},"x":{".":{"0":{"df":1,"docs":{"8":{"tf":1.4142135623730951}}},"1":{"df":1,"docs":{"9":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"'":{"df":1,"docs":{"6":{"tf":1.0}}},"df":1,"docs":{"9":{"tf":1.0}}}}}}}}}}},"title":{"root":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"f":{"a":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"10":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"b":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":4,"docs":{"0":{"tf":1.0},"1":{"tf":1.0},"2":{"tf":1.0},"5":{"tf":1.0}}}}},"df":0,"docs":{}}}}}},"r":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"10":{"tf":1.0}}}},"df":0,"docs":{}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":1,"docs":{"8":{"tf":1.0}}}}}}},"p":{"a":{"df":0,"docs":{},"t":{"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"9":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"7":{"tf":1.0}}}}}},"df":0,"docs":{}}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"s":{"df":1,"docs":{"6":{"tf":1.0}}}},"df":0,"docs":{}}}}},"u":{"df":0,"docs":{},"p":{"d":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"pipeline":["trimmer","stopWordFilter","stemmer"],"ref":"id","version":"0.9.5"},"results_options":{"limit_results":30,"teaser_word_count":30},"search_options":{"bool":"OR","expand":true,"fields":{"body":{"boost":1},"breadcrumbs":{"boost":1},"title":{"boost":2}}}});