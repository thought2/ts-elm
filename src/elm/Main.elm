port module Main exposing (..)

import Html exposing (..)
import Html.Attributes exposing (..)
import Ports exposing (..)


-- TYPES


type alias Model =
    {}


type Msg
    = Out
    | In String



-- MODEL


init : ( Model, Cmd Msg )
init =
    ( {}, sendOut "start here" )



-- VIEW


view : Model -> Html Msg
view model =
    span [ class "welcome" ] [ text "Hello World!" ]



-- SUBSCRIPTIONS


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.batch
        [ sendIn In ]



-- UPDATE


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        In data ->
            ( model, sendOut data )

        _ ->
            ( model, Cmd.none )



-- MAIN


main : Program Never Model Msg
main =
    Html.program
        { init = init
        , update = update
        , subscriptions = subscriptions
        , view = view
        }
