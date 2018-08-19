<?php

namespace App\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/tutorial")
 */
class TutorialController extends Controller
{
    /**
     * @Route("/index", name="tutorial_index", methods="GET")
     * @Template
     */
    public function index(): array
    {
        return [];
    }

    /**
     * @Route("/scopedCssTest", name="tutorial_scoped_css_test", methods="GET")
     * @Template
     */
    public function scopedCssTest(): array
    {
        return [];
    }

    /**
     * @Route("/calculator", name="tutorial_calculator", methods="GET")
     * @Template
     */
    public function calculator(): array
    {
        return [];
    }
}