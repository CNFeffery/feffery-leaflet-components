
module FefferyLeafletComponents
using Dash

const resources_path = realpath(joinpath( @__DIR__, "..", "deps"))
const version = "0.0.1-a1"

include("jl/''_leafletaction.jl")
include("jl/''_leafletgeojson.jl")
include("jl/''_leafletheatmap.jl")
include("jl/''_leafletmap.jl")
include("jl/''_leaflettilelayer.jl")

function __init__()
    DashBase.register_package(
        DashBase.ResourcePkg(
            "feffery_leaflet_components",
            resources_path,
            version = version,
            [
                DashBase.Resource(
    relative_package_path = "feffery_leaflet_components.min.js",
    external_url = "https://unpkg.com/feffery_leaflet_components@0.0.1-a1/feffery_leaflet_components/feffery_leaflet_components.min.js",
    dynamic = nothing,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "feffery_leaflet_components.min.js.map",
    external_url = "https://unpkg.com/feffery_leaflet_components@0.0.1-a1/feffery_leaflet_components/feffery_leaflet_components.min.js.map",
    dynamic = true,
    async = nothing,
    type = :js
)
            ]
        )

    )
end
end
