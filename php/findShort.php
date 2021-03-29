<?php

//Simple, given a string of words, return the length of the shortest word(s).
//String will never be empty and you do not need to account for different data types.

function findShort($str)
{

    $length = 0;

    foreach (explode(" ",$str) as $value) {

        $valueLength = strlen($value);

        if ($length == 0) {
            $length = $valueLength;
        } else {
            if ($valueLength < $length) {
                $length = $valueLength;
            }
        }
    }

    return $length;
}

echo findShort("bitcoin take over the world maybe who knows perhaps");
