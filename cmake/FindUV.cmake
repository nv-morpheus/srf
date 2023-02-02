
find_package(PkgConfig)
pkg_check_modules(PC_UV libuv)

message(STATUS "PC_UV_INCLUDE_DIRS: ${PC_UV_INCLUDE_DIRS}")
message(STATUS "PC_UV_LIBRARY_DIRS: ${PC_UV_LIBRARY_DIRS}")
message(STATUS "PC_UV_VERSION: ${PC_UV_VERSION}")
message(STATUS "PC_UV_CFLAGS: ${PC_UV_CFLAGS}")
message(STATUS "PC_UV_CFLAGS_OTHER: ${PC_UV_CFLAGS_OTHER}")


set(CMAKE_FIND_DEBUG_MODE ON)
find_path(UV_INCLUDE_DIR
  NAMES uv.h
  PATHS ${PC_UV_INCLUDE_DIRS}
  PATH_SUFFIXES uv
)
find_library(UV_LIBRARY
  NAMES uv
  PATHS ${PC_UV_LIBRARY_DIRS}
)
set(CMAKE_FIND_DEBUG_MODE OFF)

set(UV_VERSION ${PC_UV_VERSION})

include(FindPackageHandleStandardArgs)
find_package_handle_standard_args(UV
  FOUND_VAR UV_FOUND
  REQUIRED_VARS
    UV_LIBRARY
    UV_INCLUDE_DIR
  VERSION_VAR UV_VERSION
)


if(UV_FOUND)
  set(UV_LIBRARIES ${UV_LIBRARY})
  set(UV_INCLUDE_DIRS ${UV_INCLUDE_DIR})
  set(UV_DEFINITIONS ${PC_UV_CFLAGS_OTHER})
endif()

if(UV_FOUND AND NOT TARGET UV::uv)
  add_library(UV::uv UNKNOWN IMPORTED)
  set_target_properties(UV::uv PROPERTIES
    IMPORTED_LOCATION "${UV_LIBRARY}"
    INTERFACE_COMPILE_OPTIONS "${PC_UV_CFLAGS_OTHER}"
    INTERFACE_INCLUDE_DIRECTORIES "${UV_INCLUDE_DIR}"
  )
endif()

mark_as_advanced(
  UV_INCLUDE_DIR
  UV_LIBRARY
)
