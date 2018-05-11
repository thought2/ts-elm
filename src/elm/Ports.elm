port module Ports exposing (..)


port sendOut : String -> Cmd a


port sendIn : (String -> a) -> Sub a
