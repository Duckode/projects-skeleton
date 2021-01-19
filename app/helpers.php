<?php

if (!function_exists('is_route')) {

    /**
     * @param string $routeName
     * @return bool
     */
    function is_route(string $routeName)
    {
        return \Illuminate\Support\Facades\Route::currentRouteName() === $routeName;
    }
}

if (!function_exists('formatRegisterNumber')) {

    /**
     * @param $value
     * @return string|string[]|null
     */
    function formatRegisterNumber($value)
    {
        $registerNumber = preg_replace("/\D/", '', $value);

        if (strlen($registerNumber) === 11) {
            return preg_replace("/(\d{3})(\d{3})(\d{3})(\d{2})/", "\$1.\$2.\$3-\$4", $registerNumber);
        }

        return preg_replace("/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/", "\$1.\$2.\$3/\$4-\$5", $registerNumber);
    }
}

if (!function_exists('now')) {

    /**
     * @return \Carbon\Carbon
     */
    function now()
    {
        return \Carbon\Carbon::now();
    }
}

if (!function_exists('carbon')) {

    /**
     * @return \Carbon\Carbon
     */
    function carbon()
    {
        return app(\Carbon\Carbon::class);
    }
}
