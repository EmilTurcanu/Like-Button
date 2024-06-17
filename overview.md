





# Simple Profile Page
   > literal object
   > advance DOM






CODE SPLIT
   > UI (view/template) + component
   > MODEL (data/domain)
   > SERVICES (api/storage/...)
   ...



const n = 100
----------------
get
A  set
|   V
profile
 \
  +----- const
   \
+---+-----------+
|          {...}|
+---------------+







PROFILE COMPONENT
                                 component root
                                    V
data --------------------------> FRAGMENT UI







WINDOW
---------------------------------------
document
 |
 |
 .
 .
 +-- body
      |
      +-- nav                   rootElement
      |                         /
      +-- div#profileRootElement
      |                        A
      |                         \
      +-- footer                 \
                                  +----+
MEMORY                                 |
-------------------------------------  |
h3 --------> h3 -----------------------+
             |
             +-- innerText <------- profile.userName






DOM

document
  |
  +--- html
        |
        +-- head
        |           document.getElementById(`post`)
        |                   /
        +-- body         ref
             |           /
             +-- div#post



btn <---------- document.creatElement("button)
  \
   ref
     \
   button
      |
      +-- innerText: `Like`
      +-- onclick: likePost
                       |
                       V
                       () => { alert()}
