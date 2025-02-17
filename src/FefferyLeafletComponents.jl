
module FefferyLeafletComponents
using Dash

const resources_path = realpath(joinpath( @__DIR__, "..", "deps"))
const version = "0.2.0-rc1"

include("jl/''_esritiledmaplayer.jl")
include("jl/''_fragment.jl")
include("jl/''_leafletantpath.jl")
include("jl/''_leafletcircle.jl")
include("jl/''_leafletcirclemarker.jl")
include("jl/''_leafletdomwrapper.jl")
include("jl/''_leafletexport.jl")
include("jl/''_leafletfeaturegroup.jl")
include("jl/''_leafletflowlayer.jl")
include("jl/''_leafletfullscreencontrol.jl")
include("jl/''_leafletgeojson.jl")
include("jl/''_leafletheatmap.jl")
include("jl/''_leafletimageoverlay.jl")
include("jl/''_leafletlayergroup.jl")
include("jl/''_leafletmap.jl")
include("jl/''_leafletmapaction.jl")
include("jl/''_leafletmaplistener.jl")
include("jl/''_leafletmapprovider.jl")
include("jl/''_leafletmapsync.jl")
include("jl/''_leafletmarker.jl")
include("jl/''_leafletminimap.jl")
include("jl/''_leafletpolygon.jl")
include("jl/''_leafletpolyline.jl")
include("jl/''_leafletpopup.jl")
include("jl/''_leafletrectangle.jl")
include("jl/''_leafletstaticheatmap.jl")
include("jl/''_leafletsupercluster.jl")
include("jl/''_leaflettilelayer.jl")
include("jl/''_leaflettileselect.jl")
include("jl/''_leaflettooltip.jl")
include("jl/''_leafletvectortile.jl")

function __init__()
    DashBase.register_package(
        DashBase.ResourcePkg(
            "feffery_leaflet_components",
            resources_path,
            version = version,
            [
                DashBase.Resource(
    relative_package_path = "feffery_leaflet_components.min.js",
    external_url = "https://unpkg.com/feffery_leaflet_components@0.2.0-rc1/feffery_leaflet_components/feffery_leaflet_components.min.js",
    dynamic = nothing,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "feffery_leaflet_components.min.js.map",
    external_url = "https://unpkg.com/feffery_leaflet_components@0.2.0-rc1/feffery_leaflet_components/feffery_leaflet_components.min.js.map",
    dynamic = true,
    async = nothing,
    type = :js
)
            ]
        )

    )
end
end
