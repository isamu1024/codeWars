<?php

function getCount($str)
{

    $vowel = array('a', 'e', 'i', 'o', 'u');
    $vowelsCount = 0;
    foreach (str_split($str) as $value) {
        if (in_array($value, $vowel)) {
            $vowelsCount++;
        }
    }

    return $vowelsCount;
}
